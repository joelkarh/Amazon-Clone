import { createSlice } from "@reduxjs/toolkit";
// EVERYHING FOR THE BASKET 


const initialState = {
  items: [],
};
//here we create the slice 
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //HERE WE CREATED  2 ACTIONS
    addToBasket: (state, action) => {
      //manipulating in the global store and pass in a array , product from 'dispatch(addToBasket(product))'  gets back  as payload;
      state.items  = [...state.items, action.payload  ]
    },
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice (selectChosenitem)
export const selectItems = (state) /*GLOBAL STATE*/ => state.basket.items;

export default basketSlice.reducer;
