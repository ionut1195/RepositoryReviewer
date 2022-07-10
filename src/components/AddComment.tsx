import React from 'react'
import {useMutation} from '@apollo/client'
import {ADD_COMMENT} from './mutations/commentMutations'
import {useState} from 'react'
import { GET_COMMENTS } from '../hooks/useGetComments'

type addCommentType = {
	repositoryId: string
}

export default function AddComment({repositoryId}:addCommentType) {
	const [author, setAuthor] = useState('')
	const [content, setContent] = useState('')

	const [addComment] = useMutation(ADD_COMMENT, {
		context:{clientName: 'comments-client'},
		variables: {author, content, repositoryId},
		update(cache, {data: {addComment}}){
			const {comment}:any = cache.readQuery({query: 
				GET_COMMENTS});
			cache.writeQuery({
				query: GET_COMMENTS,
				data: {comment: [...comment, addComment]}
			})
		}
	})


	const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    if (author && content)
		  addComment()
    else
      alert('Please fill in Username and Comment sections!')
		setAuthor('')
		setContent('')
	}

  return (
	<div className='mt-4'>
		<h2 className='mb-2 text-xl font-semibold text-gray-600'>Share Your Opinion</h2>
		<form className='' onSubmit={onSubmit}>
			<input className='w-full border border-gray-300 rounded-lg bg-gray-50' type='text' placeholder='Github Username'
					value={author} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setAuthor(e.currentTarget.value);}} />
			<textarea onChange={(e) => setContent(e.target.value)} id="message" value={content} rows={4} className="block p-2.5 mt-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." />
			<button className='w-full py-1 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800 text-md ' type='submit' >Submit</button>
		</form>
	</div>
  )
}
