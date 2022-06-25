import React from "react"
import Repositories from "../Repositories"
import Header from "../Header"
import Search from "../Search"
import { useLazyQuery } from "@apollo/client"
import { useState } from "react"
import { User } from "../../types/User.type"

import '../../index.css'
import { GET_DATA } from "../../hooks/useGetRepositories"

const App = () => {
  const [userName, setUserName] = useState('')
  const [getData, {loading, error, data, called}] = useLazyQuery(GET_DATA,{
    variables: {
      userName:userName
    }
  })
  const handleSetUserName = (userName: string) => {
    setUserName(userName)
  }

  console.log(
    called,
    loading,
    error,
    data
  )
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (data) {
    const allData:User = data.user
    console.log(allData)
    return (
    <div className="flex flex-col content-center justify-center lg:flex-row">
     <Search getLazyData={getData} handleSetUserName={handleSetUserName} />
     {data ? ( 
     <div>
        <Header user={data.user} getLazyData={getData} handleSetUserName={handleSetUserName} />
        <Repositories nodes={allData.repositories.nodes} />
    </div>):
    <div>nothing to show yet</div>}
    </div>
  )}
  return (
    <div>
      <input type='text' value={userName} onChange={(e) => {setUserName(e.target.value)}}></input>
      <button onClick={() => getData()}>submit</button>
    </div>
  )
}

export default App