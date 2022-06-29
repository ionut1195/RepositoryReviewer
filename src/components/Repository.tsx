
import {RepositoryNode} from '../types/RepositoryNode.type'
// import RatingStar from './RatingStar'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'
import Modal from './Modal'
import {Comment} from './Repositories'

interface RepositoryPropType  {
  node: RepositoryNode,
  comments: any
}
export const Repository = ({node, comments}:RepositoryPropType) => {
 

  return (
    <div className='mt-5 border-b-2 container mx-auto min-w-full  h-[11rem]'>
      <div className='flex flex-col'>
        <div className='flex text-lg bg-gray-200'>
          <div className='mx-auto font-bold ray-500 textbo-2xl text'>{node.name}</div>
        </div>
        {node.description ? <div className='h-16 px-2 pt-2 mx-auto'>{node.description}</div> : <div className='h-16 col-span-2 pt-2 mx-auto'>This repository doens't have a description</div>}
        <div className='grid grid-cols-2 col-span-2'>
          {node.languages.nodes.map(lang => <div style={{color: lang.color}} className='mx-auto font-bold'>{lang.name}</div>)}
        </div>
        <Modal node={node} comments={comments}/>
      </div>
    </div>
  )
}
