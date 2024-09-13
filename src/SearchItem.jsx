import React, { useState } from 'react'

const SearchItem = ({search,setSearch}) => {

    
    return (
    <form onSubmit={(e)=>e.preventDefault()} className=' flex w-full p-2'>
        
        <input
            className=' flex-grow min-h-[48px] text-2xl p-1 rounded border border-black'
            type='text'
            id='search'
            placeholder='Search items'
            value={search}
            onChange={(e) =>setSearch(e.target.value)}
        />    

    </form>
  )
}

export default SearchItem