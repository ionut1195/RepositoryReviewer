import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
	query getComments {
		comment{
		  id,
		  author,
		  content,
		  repositoryId
		}
	  }
`
