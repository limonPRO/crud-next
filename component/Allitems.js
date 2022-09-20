import Link from "next/link";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deleteItems } from "../slices/itemsSlice";

function Allitems() {
 
  const items = useSelector((state) => state.itemReducer.items);
  // const {title} = item
  console.log(items);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteItems(id));
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title }));
  };

  return (
    <div>
      <h2>items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {/* <th>author</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              const { id, title } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>

                  <td>
                    <Link href={{
    pathname: `/edit`,
    query: {
      id: item.id,
      title:item.title,
    },
  }}>
                    <button  >
                     edit
                    </button>
                    </Link>
                    

                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <hr />
      
    </div>
  );
}

export default Allitems;
