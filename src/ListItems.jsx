import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

const ListItems = ({list1,handleCheck,handleDelete}) => {
  return (
            <li className=' flex justify-start items-center bg-white my-1 p-2 '>
                <input type='checkbox' checked={list1.checked}
                onChange={()=>handleCheck(list1.id)}
                className=' w-[48px] min-w-[48px] h-[48px] min-h-[48px] cursor-pointer mr-2 focus-underline'
                />
                <p className=" text-xl flex-grow break-all" style={(list1.checked) ? {textDecoration:'line-through'} : null} >{list1.item}</p>
                <RiDeleteBin5Line role='button' onClick={()=>handleDelete(list1.id)} className=" min-w-[48px] h-[36px] text-mediumbue cursor-pointer focus:outline-none hover:text-red-500 focus:text-red-500"/>
                
            </li>
  )
}

export default ListItems
