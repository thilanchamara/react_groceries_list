import React from 'react'

const Footer = ({items}) => {
  return (
    <div className=' flex justify-center items-center bg-blue-600 p-1 text-white '>
        {items.length ? <p> {items.length==1 ? `There is ${items.length} item` :`There are ${items.length} items`}</p>: <p>There is no item in the list</p>}
    </div>
  )
}

export default Footer