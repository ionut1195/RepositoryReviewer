import React from 'react'
import {useLazyQuery} from '@apollo/client'
import {GET_DATA} from '../hooks/useGetRepositories'
import {RepositoriesType, RepositoryNode} from '../types/RepositoryNode.type'
import { User } from '../types/User.type'
import { Repository } from './Repository'
import {gql, useQuery} from '@apollo/client'

const GET_COMMENTS = gql`
	query getComments {
		comment{
		  id,
		  author,
		  content,
		  repositoryId
		}
	  }
`
export type Comment = {
	id: string,
	author: string,
	content: string,
	repositoryId: string
}

type Comments = {
	comments: Array<Comment>
}


type RepositoriesPropType = {
  nodes: Array<RepositoryNode>
}
export default function Repositories({nodes}:RepositoriesPropType) {
	const {loading, error, data} = useQuery(GET_COMMENTS, { context:{clientName: 'comments-client'}})
	console.log(
		loading,
		error,
		data
	)
	if (loading) return <>Loading</>
	if (error) return <>Error</>

	const comments:any = data.comment
	console.log(comments)

  console.log(nodes)
  const repoList = nodes.map((node) => <Repository node={node} comments={comments.filter((comment:any) => comment.repositoryId === node.id)}/>)

  return (
    <div className='flex flex-col'>{repoList}</div>
  )
}
