import React from "react"
import Repositories from "../Repositories"
import Header from "../Header"
import { useLazyQuery } from "@apollo/client"
import { useState } from "react"
import { User } from "../../types/User.type"

import DefaultComponent from "../DefaultComponent"

import '../../index.css'
import { GET_DATA } from "../../hooks/useGetRepositories"


const App = () => {
  const [userName, setUserName] = useState('')
  const [getData, {loading, error, data}] = useLazyQuery(GET_DATA,{
    variables: {
      userName:userName
    }
  })
  const handleSetUserName = (userName: string) => {
    setUserName(userName)
  }

  // console.log(
  //   called,
  //   loading,
  //   error,
  //   data
  // )

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (data) {
    const allData:User = data.user
    // console.log(allData)
    return (
    <div className="flex flex-col content-center justify-center container mx-auto max-w-[1080px]">
        <Header user={allData} getLazyData={getData} handleSetUserName={handleSetUserName} />
        <Repositories nodes={allData.repositories.nodes} />
    </div>
  )}
  return (
  <div>
    <DefaultComponent getData={getData} handleSetUserName={handleSetUserName} />
    {/* <div className="container mx-auto">
    <div className="flex items-center ">
      <FaGithub className="hidden w-10 h-auto md:flex md:w-16 justify-self-center"  />
      <h1 className="pl-3 mx-auto text-3xl md:text-4xl">Repository Reviewer</h1>
    </div>
    </div>
    <Search getLazyData={getData} handleSetUserName={handleSetUserName} />
     */}
  </div>
  )
}

export default App