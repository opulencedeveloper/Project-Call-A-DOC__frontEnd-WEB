import { createSlice } from "@reduxjs/toolkit";

const signupInitialState = {
  items: [],
  //totalQuantity: 0,
  //changed: false, //this is used to avoid triggering the useEffect for sending cart when the cart state change because we fetch the cart from the db and update it
};

const signupSlice = createSlice({
  name: "signupSlice",
  initialState: signupInitialState,
  reducers: {
    addDetails(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        price: newItem.price,
        quantity: 1,
        totalPrice: newItem.price,
        name: newItem.title,
      });
      //state.totalQuantity++;
      //state.changed = true;
     
    },
  },
});


export const signupActions = signupSlice.actions;

export default signupSlice;
