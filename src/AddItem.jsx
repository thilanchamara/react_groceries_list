import React, { useRef, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const AddItem = ({items,setItems,setAndSaveItems}) => {

    const[newItem,setNewItem]=useState('')
    const inputRef=useRef();

    const changes= (value)=>{
            setNewItem(value);
           
    }
    const addItems=()=>{

        const object={
        id:(items.length!==0) ? items.length+1 : 1,
        checked:false,
        item:newItem
        }
          // console.log(object.id);
          const listItems=[...items,object];
        setAndSaveItems(listItems);
        
    }
    const handleItems=(a)=>{
            a.preventDefault();
            addItems();
            setNewItem("");
    }
  return (
    <form onSubmit={handleItems} className='flex w-full p-2'>
        
        <input 
            ref={inputRef}
            id="additem"
            type='text'
            placeholder='Add items'
            required
            autoFocus
            value={newItem}
            onChange={(e)=>changes(e.target.value)}
            className='flex-grow min-h-[48px] mr-1 p-1 rounded outline-none text-2xl border border-black'

        />
        <button type='submit' onClick={() =>inputRef.current.focus()}
        className=' min-w-[48px] text-2xl  text-blue-600 rounded cursor-pointer h-[48px] bg-gray-300 flex items-center justify-center' ><FaPlus className=' text-center'/></button>
        
    </form>
    
  )
}

export default AddItem