import React, { useState ,useEffect} from 'react'
import Content from "./Content";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import Footer from './Footer';

function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
  const [search,setSearch] =useState('');


  useEffect(()=>{
    console.log("loading");
  },[items])
const setAndSaveItems=(newList)=>{
      setItems(newList);
      localStorage.setItem('shoppinglist',JSON.stringify(newList))
}
const handleCheck =(id)=>{
  const listItems=items.map((item)=> item.id===id ?{...item,
      checked:!item.checked} : item)

      setAndSaveItems(listItems);
      
  }
const handleDelete=(id)=>{

  const listItems=items.filter((item)=>item.id!==id);
  setAndSaveItems(listItems);
  
}
  return (
    <div className=' flex flex-col mx-auto w-full h-screen max-w-[500px] border border-black'>
        <Header/>
        <AddItem
          
          items={items}
          setItems={setItems}
          setAndSaveItems={setAndSaveItems}
        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <Content
            list={items.filter(item=>((item.item).toLowerCase().includes(search.toLowerCase())))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        <Footer items={items}/>
    </div>
  );
}

export default App;
