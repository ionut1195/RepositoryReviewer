import {FaGithub} from 'react-icons/fa'
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
        className="hover:bg-blue-500 text-black hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 my-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Details!
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-700 rounded-t">
                  <h3 className="text-3xl font-semibold mx-auto">
                    {node.name}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative max-h-[50vh] overflow-scroll p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {node.description ? node.description : "This repository doesn't have a description!"}
                  </p>
                  <div className='border-1'>
                    <h3 className='font-bold'>Comments:</h3>
					<ul>{comments.map((comment) => 
						<li key={comment.id}>
							<h4 className='font-semibold border border-inherit'>{comment.author}:</h4>
						{comment.content}</li>)}</ul>
                  </div>
				  <AddComment repositoryId={node.id}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-3 border-t border-solid border-blue-700 rounded-b">
                    <div className='flex items-center flex-col'>
                        <p className=" text-slate-500 text-lg leading-relaxed">
                        See on
                        </p>
                        <a href={node.url} target={'_blank'} rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
