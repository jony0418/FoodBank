import { gql } from '@apollo/client';

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

export const updateProduct = gql`
  mutation UpdateProduct($productId: ID!, $quantity: Int!, $name: String, $description: String) {
    updateProduct(id: $productId, quantity: $quantity, name: $name, description: $description) {
      name
      description
      quantity
    }
  }
`;

export const findproduct = gql`
  query GetProduct($name: String!) {
    product(id: $id) {
      _id
      name
      description
      image
      quantity
    }
  }
`;

export const UPDATE_PRODUCT_QUANTITY = gql`
  mutation UpdateProductQuantity($id: ID!, $quantity: Int!) {
    updateProductQuantity(id: $id, quantity: $quantity) {
      _id
      quantity
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: TransactionInput!) {
    createTransaction(input: $input) {
      _id
      transaction_date
      operation
    }
  }
`;
