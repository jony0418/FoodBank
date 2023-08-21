const { AuthenticationError } = require('apollo-server-express'); 
const { User, Category, Product } = require('../models'); 
const { signToken } = require('../utils/auth'); 

const resolvers = {
    Query: {
        //this resolver returns the user own profile if they are logged, if not the rror is thrown
        me: async (parent, arg, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id}); 
            }
            throw new AuthenticationError('You need to be logged in!'); 
        },
        categories: async () => {
            return Category.find().populate('products'); 
        },
        category: async (parent, {categoryId}) => {
            return Category.findOne({_id: categoryId}).populate('products')
        },
        products: async () => {
            try {
              const products = await Product.find().populate('category').exec();
              return products;
            } catch (error) {
              throw new Error('Error fetching products: ' + error.message);
            }
          },
        product: async (parent, { productId }) => {
            try {
                const product = await Product.findById(productId).populate('category').exec();
                return product;
              } catch (error) {
                throw new Error('Error fetching product: ' + error.message);
              }
            }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password }); 
            const token = signToken(user); 

            return { token, user }; 
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email }); 

            const correctPW = await user.isCorrectPassword(password);

            if (!user || !correctPW ) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user); 
            return { token, user }; 
        },
        addCategory: async (parent, { name }) => {
            const category = await Category.create({ name }); 
            return category; 
        },
        addProduct: async (parent, { name, description, image, quantity, categoryId }) => {
            let category = null;
            
            if (categoryId) {
              category = await Category.findById(categoryId);
              
              if (!category) {
                throw new Error(`Category not found for ID: ${categoryId}`);
              }
            }
          
            const product = await Product.create({
                name,
                description,
                quantity,
                category: categoryId,
            }); 

            category.products.push(product._id); 
            await category.save();
            return product;

        },
        updateProduct: async (parent, { id, quantity }) => {
            return await Product.findByIdAndUpdate(id,
                { quantity },
                { new: true }
            )
        },
        deleteProduct: async (parent, { id }) => {
            return await Product.findOneAndDelete({ _id: id } )
        }
    },
}; 

module.exports = resolvers; 

