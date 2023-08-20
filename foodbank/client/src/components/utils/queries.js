import { gql } from '@apollo/client';

// export const GET_PRODUCTS = gql`
// query getProduct($productId: ID!) {
//   product(productId: $productId) {
//     _id
//     name
//     description
//     image
//     quantity
//     category {
//       _id
//       name
//     }
//   }
// }
// `;

export const GET_PRODUCTS = gql`
query getProducts {
    products {
      _id
      description
      image
      name
      quantity
    }
  }
`;


