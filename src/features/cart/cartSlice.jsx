import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, actions) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === actions.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        console.log("quantity increased");
      } else {
        state.cartItems = [
          ...state.cartItems,
          { product: actions.payload, quantity: 1 },
        ];
        console.log("item added");
      }
      state.totalItems = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.totalPrice + actions.payload.discountedPrice;
    },
    removeItem: (state, actions) => {
      state.cartItems = state.cartItems.filter(
        (item) => actions.payload.id !== actions.payload
      );
    },
    increase: (state, actions) => {
      const { id } = actions.payload;
      const itemToIncrement = state.cartItems.find(
        (item) => item.product.id === id
      );
      console.log("Item to increment:", itemToIncrement);
      itemToIncrement.quantity++;
      console.log("Increased item quantity to:", itemToIncrement.quantity);
      state.totalItems++;
      state.totalPrice += itemToIncrement.product.discountedPrice;
      // const cartItem = state.cartItems.find(
      //   (item) => item.id === actions.payload.id
      // );
      // cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, actions) => {
      const { id } = actions.payload;
      const itemToDecrement = state.cartItems.find(
        (item) => item.product.id === id
      );
      console.log("Item to decrement:", itemToDecrement);
      if (itemToDecrement.quantity > 1) {
        itemToDecrement.quantity--;
        console.log("Decreased item quantity to:", itemToDecrement.quantity);
        state.totalItems--;
        state.totalPrice -= itemToDecrement.product.discountedPrice;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== id
        );
        console.log("Removed item from cart");
        state.totalItems--;
        state.totalPrice -= itemToDecrement.product.discountedPrice;
      }
    },
  },
});

export const { clearCart, addToCart, totalPriceOfCart, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
