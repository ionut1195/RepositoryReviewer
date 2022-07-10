
import {RepositoryNode} from '../types/RepositoryNode.type'
// import RatingStar from './RatingStar'

import Modal from './Modal'
import {Comment} from './Repositories'

interface RepositoryPropType  {
  node: RepositoryNode,
  comments: Array<Comment>
}
export const Repository = ({node, comments}:RepositoryPropType) => {
 

  return (
    <div className='mt-5 border-b-2 container mx-auto min-w-full  h-[12rem]'>
      <div className='flex flex-col'>
        <div className='flex text-lg bg-gray-200'>
          <div className='py-1 mx-auto text-xl font-bold text-gray-600 md:text-2xl'>{node.name}</div>
        </div>
        {<div className='h-16 px-2 pt-2 mx-auto text-lg text-gray-800 md:text-xl'>{node.description ? node.description : "This repository doens't have a description"}</div>}
        <div className='grid grid-cols-2 col-span-2 mt-2'>
          {node.languages.nodes.map(lang => <div style={{color: lang.color}} className='mx-auto font-bold'>{lang.name}</div>)}
        </div>
        <Modal node={node} comments={comments}/>
      </div>
    </div>
  )
}
