import React from 'react'
import { useState } from 'react'

export default function Search({getLazyData, handleSetUserName}:any) {
    const [query, setQuery] = useState('')

    const handleChange = (e:any) => {
        setQuery(e.target.value)
    }
    const getData = (e:any) => {
        e.preventDefault()
        handleSetUserName(query)
        getLazyData()
        
    }
    console.log(query)
  return (
    <div className='justify-self-center'>
        <input type="text" value={query} onChange={handleChange} placeholder='Search...' />
        <button onClick={getData}>Search</button>
    </div>
  )
}
