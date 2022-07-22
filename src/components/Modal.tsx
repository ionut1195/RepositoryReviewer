import {FaGithub, FaStar} from 'react-icons/fa'
import React from "react";
import { RepositoryNode } from "../types/RepositoryNode.type";
import AddComment from "./AddComment"
import {Comment} from './Repositories'

interface RepositoryPropType  {
    node: RepositoryNode,
	comments: Array<Comment>
  }

export default function Modal({node, comments}:RepositoryPropType) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-6 py-3 my-1 mr-1 text-sm font-bold text-black uppercase bg-blue-400 transition-all duration-150 ease-linear rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <p className='animate-pulse  hover:animate-none'>view details!</p>
      </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-[95vw] lg:w-[80vw] xl:w-[70vw] max-w-4xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-blue-700 border-solid rounded-t">
                  <h3 className="mx-auto text-3xl font-semibold">
                    {node.name}
                  </h3>
                </div>
                {/*body*/}
                <div className="flex flex-col px-5 sm:flex-row sm:border-b-2 sm:border-blue-600">
                  <div className='grid content-center w-full mx-auto border-b-2 border-blue-600 justify-items-center sm:border-none'>
                    <div className=''>Forks</div>
                    <div className=''>{node.forks.totalCount}</div>
                  </div>
                  <div className='grid content-center w-full mx-auto border-b-2 border-blue-600 justify-items-center sm:border-none'>
                    <FaStar size={20} className='' fill='orange'/>
                    <div className=''>{node.stargazers.totalCount}</div>
                  </div>
                  {node.isFork ? <div className='grid content-center w-full justify-items-center'>Forked</div> : null}
                </div>
                <div className="relative max-h-[50vh] overflow-scroll p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {node.description ? node.description : "This repository doesn't have a description!"}
                  </p>
                  <div className='border-1'>
                    <h3 className='text-lg font-bold lg:text-2xl'>Comments:</h3>
                    <ul>{comments.map((comment) => 
                      <li key={comment.id}>
                        <h4 className='text-lg font-semibold text-gray-400 border-b lg:text-xl border-inherit'>{comment.author}:</h4>
                      <p className='py-2'>{comment.content}</p></li>)}</ul>
                  </div>
                  <AddComment repositoryId={node.id}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-3 border-t border-blue-700 border-solid rounded-b">
                    <div className='flex flex-col items-center'>
                        <p className="text-lg leading-relaxed text-slate-500">
                        See on
                        </p>
                        <a className='' href={node.url} target={'_blank'} rel="noreferrer">
                            <FaGithub size={26} />
                        </a>
                    </div>
                    <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear rounded-lg outline-none hover:bg-red-600 hover:text-white background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
