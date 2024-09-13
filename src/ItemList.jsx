import React from 'react'

import ListItems from './ListItems';

const ItemList = ({item,handleCheck,handleDelete}) => {
  return (
    <ul className=' flex flex-col w-full'>
        {item.map((item)=>
            
            <ListItems 
                key={item.id}
                list1={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                
            />
        )}
  </ul>
  )
}

export default ItemList