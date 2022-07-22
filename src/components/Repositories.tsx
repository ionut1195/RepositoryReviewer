import { RepositoryNode} from '../types/RepositoryNode.type'
import { Repository } from './Repository'
import {useQuery} from '@apollo/client'
import { GET_COMMENTS } from '../hooks/useGetComments'

export type Comment = {
	id: string,
	author: string,
	content: string,
	repositoryId: string
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

	const comments:Array<Comment> = data.comment
  return (
    <div className='flex flex-col'>{
      nodes.map((node) => <Repository key={node.id} node={node} comments={comments.filter((comment) => comment.repositoryId === node.id)}/>)
      }</div>
  )
}
