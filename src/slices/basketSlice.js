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
    removeFromBasket: (state, action) => {
      //when i click remove it willl  find a id 
      //going to find the index of the item and see if texiist 
      //findIndex  search 
      const index = state.items.findIndex(
      (basketItem)=>
      basketItem.id === action.payload.id);
      //here we create a copy of a new basket 
      let newBasket = [...state.items];

      if(index >= 0){
        //the item exists in the basket ...remove it...
        newBasket.splice(index,1);
        //its going to the index and cutting it out by 1
      }
      else{
        console.warn(
          `Can't move product (id: ${action.payload.id} as its not in the basket`
        );
      }
      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice (selectChosenitem)
export const selectItems = (state) /*GLOBAL STATE*/ => state.basket.items;
export const selectTotal=(state)=> state.basket.items.reduce((total, item)=> total + item.price,0)

export default basketSlice.reducer;
