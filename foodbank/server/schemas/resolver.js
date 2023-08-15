import { Inventory, User, Donation, Distribution } from "../models";
module.exports = resolvers = {
    Query: {
        inventory: async () => {
            return Inventory.find({});
        }, 
        user: async () => {
            return User.find({});
        }, 
        donation: async () => {
            return Donation.find({});
        }, 
        distribution: async () => {
            return Distribution.find({});
        }, 
    },
    Mutation: {
        
    }
};
