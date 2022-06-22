
import {RepositoryNode} from '../types/RepositoryNode.type'
import RatingStar from './RatingStar'

interface RepositoryPropType  {
  node: RepositoryNode
}
export const Repository = ({node}:RepositoryPropType) => {
  return (
    <div className='mt-5 px-2 container mx-auto lg:max-w-[80vw] max-h-[200px]'>
      <div className='grid grid-cols-2'>
        <div className='flex min-w-full col-span-2 text-lg bg-gray-200'>
          <div className='mx-auto font-bold ray-500 textbo-2xl text'>{node.name}</div>
        </div>
        {node.description ? <div className='h-16 col-span-2 pt-2 mx-auto'>{node.description}</div> : <div className='h-16 col-span-2 pt-2 mx-auto'>This repository doens't have a description</div>}
        <div className='grid grid-cols-2 col-span-2'>{node.languages.nodes.map(lang => <div style={{color: lang.color}} className='mx-auto font-bold'>{lang.name}</div>
        )}</div>
      </div>
      <RatingStar />
    </div>
  )
}
