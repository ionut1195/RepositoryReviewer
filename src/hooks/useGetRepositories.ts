import {gql} from '@apollo/client'

const GET_REPOSITORIES = gql`
  query{
    user(login: "ionut1195") {
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
const GET_USER = gql`
  query{
    user(login: "ionut1195") {
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
    }
  }
`

export  {GET_REPOSITORIES, GET_USER}