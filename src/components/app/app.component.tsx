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
  </div>
  )
}

export default App