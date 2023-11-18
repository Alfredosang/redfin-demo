import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
mutation RegisterUser($createUserInput: CreateUserInput!) {
    registerUser(createUserInput: $createUserInput) {
      id
      name
      email
    }
  }
`;