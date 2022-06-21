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
    <div>
      <div>{user.id}</div>
      <div>{user.login}</div>
      <div>
        Followers
        <div>
        {user.followers.totalCount}
        </div>
      </div>
      <div>
        Following
        <div>
        {user.following.totalCount}
        </div>
      </div>
      <div>{user.avatarUrl}</div>
    </div>
  )
    
  
}

export default Header