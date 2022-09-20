const { createSlice } = require("@reduxjs/toolkit");


const initialBooks = {
  items: [ { id:0, title: "item1" },
  { id:1, title: "item2" }]
   
};

export const itemsSlice = createSlice({
  name: "items",
  initialState: initialBooks,
  reducers: {
    allItems: (state) => state,
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    updateItems: (state, action) => {
      let { items } = state;
     state.items = items.map((item) => 
       item.id === action.payload.id ? action.payload : item);
      // const { id, title, } = action.payload;
      // const isItemsExist = state.items.filter((items) => items.id === id);
      // if (isItemsExist) {
      //   isItemsExist[0].title = title;
        
      // }
    },
    deleteItems: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { allItems, addItems, deleteItems, updateItems } =
  itemsSlice.actions;
export default itemsSlice.reducer;