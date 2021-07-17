import React, { useState } from "react";


function CreateArea(props) {

  //- a constant that keeps track of the title and content.
  const [note, setNote] = useState({
    title : "",
    content : ""
  });

  function handleChange(event){
    const {name, value}= event.target;
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    }
    )};

    //- Passing the new note back to the App.
    function submitForm(event){
      props.onAdd(note)
      setNote({
        title : "",
        content : ""
      })
      event.preventDefault();
    };

  return (
    <div>
      <form>
        <input name="title" value = {note.title} onChange = {handleChange} placeholder="Title" />
        <textarea name="content" value = {note.content} onChange = {handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitForm}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
