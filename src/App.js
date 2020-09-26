import React, { useState } from 'react';
import Createnote from './Createnote';
import Footer from './Footer';
import Note from './Note';
import Header from './Header';

const App = () => {
  const [addItem , setAddItem] = useState([]);
  const addNote = (note) =>{
  
    setAddItem((prevData)=>{
      return [...prevData,note]


    })

  }
  const onDelete = (id) =>{
    setAddItem((olddata) => 
    olddata.filter((curdata,ind)=>{
      return ind !==id;
    })
    )
  }
  return (
    <>
        <Header/>
        <Createnote passNote={addNote} />
        
        {addItem.map((val,index)=>{
          return (
            <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
          );
        })}
        <Footer/>
    </>
  );
}

export default App;
