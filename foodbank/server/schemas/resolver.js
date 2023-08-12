const { AuthenticationError } = require('apollo-server-express'); 
const { User } = require('../models'); 
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
    }
}

module.exports = resolvers; 