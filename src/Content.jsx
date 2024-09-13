import React from 'react'
import ItemList from './ItemList'




const Content = ({list,handleCheck,handleDelete}) => {

    
    return (
       <main className=' w-full h-full flex flex-col flex-grow overflow-y-auto justify-center items-center mt-4'> 
            <ItemList
                item={list}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            {!list.length && <p>this is an empty array</p>}
        </main>
  
  )
}

export default Content