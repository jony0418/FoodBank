import { gql } from '@apollo/client';
export const GET_PRODUCTS = gql`
query getProducts {
    products {
      _id
      description
      image
      name
      quantity
      category {
        _id
        name
     }
    }
  }
`;


export const GET_PRODUCT = gql`
query Query($productId: ID) {
  product(productId: $productId) {
    name
    description
    quantity
  }
}
`;

