import React from 'react'
import {useLazyQuery} from '@apollo/client'
import {GET_DATA} from '../hooks/useGetRepositories'
import {RepositoriesType} from '../types/RepositoryNode.type'
import { Repository } from './Repository'

export default function Repositories({repositories}:any) {
  console.log(repositories)
  const rep:RepositoriesType = repositories
  const repoList = rep.repositories.nodes.map(node => <Repository key={node.id} node={node}/>)

  return (
    <div className='flex flex-col'>{repoList}</div>
  )
}
