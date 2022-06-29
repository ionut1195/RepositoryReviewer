import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
	mutation addComment($author: String!, $content: String!, $repositoryId: String!){
		addComment(author: $author, content: $content, repositoryId: $repositoryId){
			author,
			id,
			content,
			repositoryId
		}
	}
`

export  {ADD_COMMENT}