import React from "react"
import {GET_USER} from "../hooks/useGetRepositories"
import { useQuery } from "@apollo/client"
import {User} from '../types/User.type'


const Header = () => {
  const {loading, error, data} = useQuery(GET_USER)

  if (loading) return <div>Loading</div>
  if (error) return <div>Encountered a random error</div>

  const user:User = data.user
  console.log(user)
  return (
    <div className="bg-blue-400">
      <div className="container bg-white grid grid-rows-2 max-w-[80vw] mx-auto align-items-center py-4">
        <div className="flex mx-4">
          <div className="w-20 h-20">
            <img className="rounded-full" src={user.avatarUrl} />
          </div>
          <div className="self-center ml-10 text-2xl">{user.login}</div>
        </div>
        <div className="flex mt-3 text-xl">
          <div className="flex flex-col mx-4">
            <div>Followers</div>
            <div className="self-center">
            {user.followers.totalCount}
            </div>
          </div>
          <div className="flex flex-col">
            <div>Following</div>
            <div className="self-center">
            {user.following.totalCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    
  
}

export default Header