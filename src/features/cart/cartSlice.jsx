import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
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
      const { id } = actions.payload;
      const itemToRemove = state.cartItems.find(
        (item) => item.product.id === id
      );
      if (itemToRemove) {
        const itemPrice =
          itemToRemove.product.discountedPrice * itemToRemove.quantity;
        state.totalPrice -= itemPrice;
        state.totalItems -= itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== id
        );
      }
    },
    increase: (state, actions) => {
      const { id } = actions.payload;
      const itemToIncrement = state.cartItems.find(
        (item) => item.product.id === id
      );
      console.log(current(state));
      console.log("Item to increment:", itemToIncrement);
      itemToIncrement.quantity++;
      console.log("Increased item quantity to:", itemToIncrement.quantity);
      state.totalItems++;
      state.totalPrice += itemToIncrement.product.discountedPrice;
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

export const {
  clearCart,
  addToCart,
  totalPriceOfCart,
  increase,
  decrease,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
