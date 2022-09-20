import React, { useState } from 'react'
import {  useDispatch } from "react-redux";

function UpdateItems() {
    const [ediTitle, setEditTitle] = useState(title);
    const dispatch = useDispatch()
    const [title , setTitle]=useState('limon')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, title }));
       
      };
  return (
    <div> 
        <div>
        <div>
      <h2>edit Book</h2>
      <form >
        <div onClick={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
             value={ediTitle}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateItems