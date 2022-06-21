import React from "react"
import Repositories from "../Repositories"
import Header from "../Header"


import '../../index.css'

const App = () => {
  return (
    <div className="flex flex-col content-center justify-center lg:flex-row">
      <Header />
      <Repositories />
    </div>
  )
}

export default App