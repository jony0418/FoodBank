import { gql } from '@apollo/client';

export const addUser = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      _id
      username
      email
      password
    }
  }
`;
