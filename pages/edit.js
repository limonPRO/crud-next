import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { updateItems } from '../slices/itemsSlice';

function edit() {
    const router = useRouter()
    const dispatch = useDispatch()
    const  { id,title } = router.query
    const [newtitle, setNewTitle] = useState(title);
   
    // console.log(setNewTitle)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateItems({ id, title }));
        // navigate("/show-books", { replace: true });
      };
  
  return (
    <div>
         <div>
      <h2>edit Book</h2>
      <form onSubmit={handleSubmit} >
        <div >
            {/* <p>{id}</p>
            <p>{title}</p> */}
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newtitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  )
}

export default edit