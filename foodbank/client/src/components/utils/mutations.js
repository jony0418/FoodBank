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
