import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('restaurant') ? {
  resId: JSON.parse(localStorage.getItem('restaurant')).resId
}
:
{
  resId: null
}

const restaurant = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setResId: (store, action)=> {
      store.resId = action.payload
    },
    setRestaurants: (store, action) => {
      store.restaurants = action.payload
    },
    setRestaurant: (store, action) => {
      store.restaurant = action.payload
    }
  }
})

export default restaurant