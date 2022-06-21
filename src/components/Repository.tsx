import { defineArguments } from 'graphql/type/definition'
import React, { FunctionComponent, ReactElement } from 'react'
import {RepositoryNode} from '../types/RepositoryNode.type'
// import {LanguageNode} from '../types/Language.type'

interface RepositoryPropType  {
  node: RepositoryNode
}
export const Repository = ({node}:RepositoryPropType) => {
  return (
    <div className='mt-5 container max-w-[80vw] lg:max-w-[40vw] mx-auto min-h-[100px]'>
      <div className='grid grid-cols-2'>
        <div className='col-span-2 justify-self-center'>{node.name}</div>
        <div>{node.url}</div>
        <div className='grid grid-cols-2 col-span-2'>{node.languages.nodes.map(lang => <div className="bg-red-200">{lang.name}</div>)}</div>
      </div>
    </div>
  )
}
