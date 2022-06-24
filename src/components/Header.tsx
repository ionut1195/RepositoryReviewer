import React from "react"

import Search from "./Search"
import {User} from '../types/User.type'

const Header = ({user, getLazyData, handleSetUserName}:any) => {

  return (
    <div className="max-h-screen bg-blue-400 ">
      <div className="container  grid grid-rows-3 max-w-[80vw] mx-auto align-items-center py-4">
        <div className="flex mx-4">
          <div className="w-20 h-20">
            <img className="rounded-full" src={user.avatarUrl} />
          </div>
          <div className="self-center ml-10 text-2xl font-semibold">{user.login}</div>
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
        <Search getLazyData={getLazyData} handleSetUserName={handleSetUserName} />
      </div>
    </div>
  )
    
  
}

export default Header