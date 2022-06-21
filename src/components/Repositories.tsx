import React from 'react'
import {useQuery} from '@apollo/client'
import {GET_REPOSITORIES} from '../hooks/useGetRepositories'
import {RepositoriesType} from '../types/RepositoryNode.type'
import { Repository } from './Repository'

export default function Repositories() {
  const {loading, error, data} = useQuery(GET_REPOSITORIES)
  if (loading) return <p>Loading</p>
  if (error) return <p>Some error happened</p>
  const rep:RepositoriesType = data.user
  const repoList = rep.repositories.nodes.map(node => <Repository key={node.id} node={node}/>)

  return (
    <div className='flex flex-col'>{repoList}</div>
  )
}
