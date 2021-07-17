import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //- Catching the new note from CreateArea.
  //- Adding new note to an array.
  const [notes, setNotes] = useState([]);
  function onAdd(newNotes){
    setNotes(preNotes => {
      return [...preNotes,newNotes]})

  };


//- Callback from the Note component to trigger a delete function.
  function deleteItem(id){
    setNotes(prevNotes => {
      //- Using the filter function to filter out the item that needs deletion.
      //- Passing a id over to the Note component, pass it back to the App when deleting.
      return prevNotes.filter((noteItem,index) => {
        return index !== id;
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((noteItem, index) => {
        //- Take array and render seperate Note components for each item.
         return <Note
         key = {index}
         id = {index}
         title={noteItem.title} 
         content={noteItem.content} 
         onDelete = {deleteItem} /> 
      })}
      <Footer />
    </div>
  );
}

export default App;
