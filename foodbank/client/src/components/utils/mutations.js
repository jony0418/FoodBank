import { gql } from "@apollo/client";

export const addUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
      }
    }
  }
`;

export const UserLogin = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const deleteProduct = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      _id
      name
    }
  }
`;

export const addproduct = gql`
  mutation AddProduct($name: String!, $description: String, $image: String, $quantity: Int, $categoryId: ID) {
    addProduct(name: $name, description: $description, image: $image, quantity: $quantity, categoryId: $categoryId) {
      _id
      name
      description
      image
      quantity
      category {
        name
      }
    }
  }
`;

export const modifyProduct = gql`
  mutation ModifyProduct($id: ID!, $name: String, $description: String, $image: String, $quantity: Int, $categoryId: ID) {
    modifyProduct(id: $id, name: $name, description: $description, image: $image, quantity: $quantity, categoryId: $categoryId) {
      _id
      name
      description
      image
      quantity
      category {
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($name: String!) {
    product(id: $id) {
      _id
      name
      description
      image
      quantity
      category {
        name
      }
    }
  }
`;