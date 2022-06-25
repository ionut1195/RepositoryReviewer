import React from 'react'
import {useLazyQuery} from '@apollo/client'
import {GET_DATA} from '../hooks/useGetRepositories'
import {RepositoriesType, RepositoryNode} from '../types/RepositoryNode.type'
import { User } from '../types/User.type'
import { Repository } from './Repository'

type RepositoriesPropType = {
  nodes: Array<RepositoryNode>
}
export default function Repositories({nodes}:RepositoriesPropType) {
  console.log(nodes)
  const repoList = nodes.map((node) => <Repository node={node}/>)

  return (
    <div className='flex flex-col'>{repoList}</div>
  )
}
