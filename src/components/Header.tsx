import React from "react"

import Search from "./Search"
import {User} from '../types/User.type'
import { LazyQueryExecFunction } from "@apollo/client";

interface headerPropsType {
  user: User,
  getLazyData: LazyQueryExecFunction<any, {
    userName: string;
  }>,
  handleSetUserName: (userName: string) => void
}

const Header = ({user, getLazyData, handleSetUserName}:headerPropsType) => {

  return (
    <div className="">
      <div className="container  grid grid-rows-3 max-w-[80vw] mx-auto align-items-center py-4">
        <div className="flex mx-4">
          <div className="w-20 h-20">
            <img className="row-span-2 rounded-full" alt="Github User Avatar" src={user.avatarUrl} />
          </div>
          <div className="self-center ml-10 text-2xl font-semibold">{user.login}</div>
        </div>
        <div className="flex mt-3 text-xl">
          <div className="flex flex-col mx-4">
            <div className="font-semibold ">Followers</div>
            <div className="self-center font-bold text-blue-700">
            {user.followers.totalCount}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold ">Following</div>
            <div className="self-center font-bold text-blue-700">
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