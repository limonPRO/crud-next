import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { addItems } from '../slices/itemsSlice';

function AddItems() {
const [title, setTitle] = useState("");
const itemslength = useSelector((state) => state.itemReducer.items.length);
console.log(itemslength)
// const itemsLength = useSelector((state) => state.items.length);
const dispatch = useDispatch()
const handleSubmit = (e) => {
  e.preventDefault();
  const item = {  title };
  dispatch(addItems({
    id: itemslength + 1,
    title
  }));
  setTitle('')
  // navigate("/show-books", { replace: true });
};

  return (
    <div>
        <div>
      <h2>Add Items</h2>
      <form onSubmit={handleSubmit} >
        <div >
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add items</button>
      </form>
    </div>
    </div>
  )
}

export default AddItems