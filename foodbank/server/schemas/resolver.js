const { AuthenticationError } = require('apollo-server-express'); 
const { User } = require('../models'); 
const Category = require('../models/Category');
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
        addProduct: async (parent, { name, description, quantity, category }) => {
            //find the category by name
            const categoryDoc = await Category.findOne({ name }); 

            if (!categoryDoc) {
                throw new Error('Category not found');
            }
            const product = await Product.create({
                name, 
                description, 
                quantity, 
                category: categoryDoc._id,
            }); 
            return product.populate('category').execPopulate(); 
        },
    },
}; 

module.exports = resolvers; 