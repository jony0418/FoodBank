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
        # products(category: String, name: String): [Product]
        products: [Product]
        product(_id: ID, name: String): Product
    }

  type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addProduct(name: String, description: String, quantity: Int, categoryId: ID): Product
        addCategory(name: String!): Category
        updateProduct( id: ID!, name: String!): Product
        deleteProduct( id: ID! ): Product
    }
`;

module.exports = typeDefs;