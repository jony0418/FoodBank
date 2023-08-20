import { gql } from '@apollo/client';

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
