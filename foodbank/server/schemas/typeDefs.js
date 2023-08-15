const { gql } = require('apollo-server-express'); 

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }
    type Category {
        _id: ID
        name: String
        products: [Product]
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        categories: [Category]
        products(category: String, name: String): [Product]
        porduct(_id: ID, name:String): Product
    }

  type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addProduct(name: String, description: String, quantity: Int, categoryId: ID): Product
        addCategory(name: String!): Category
    }
`;

module.exports = typeDefs;