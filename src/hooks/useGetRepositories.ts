import {gql} from '@apollo/client'

export const GET_DATA = gql`
  query GetData($userName: String!){
    user(login: $userName) {
      id
      login
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      avatarUrl
      repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          name
          description
          url
          languages(first: 2) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
`
export const GET_REPO = gql`
  query GetRepo($repoName: String!, $userName: String!)  {
    repository(name: $repoName, owner: $userName) {
      id
      name
      url
      stargazers {
        totalCount
      }
      description
      forks {
        totalCount
      }
      isFork
      languages (first: 2) {
        nodes {
          name
        }
      }
    }
  }
`
