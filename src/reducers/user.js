import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user') ? {
  id: JSON.parse(localStorage.getItem('user')).userId,
  username: JSON.parse(localStorage.getItem('user')).username,
  email: JSON.parse(localStorage.getItem('user')).email,
  profileImage: JSON.parse(localStorage.getItem('user')).profileImage,
  accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
  errors: null,
  signup: false
}
:
{
  id: null, 
  username: null, 
  email: null,
  profileImage: null, 
  accessToken: null, 
  errors: null, 
  signup: false
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (store, action) => {
      store.id = action.payload
    },
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setEmail: (store, action) => {
      store.email = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
    setProfileImage: (store, action) => {
      store.profileImage = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    },
    showSignupForm: (store, action) => {
      store.signup = action.payload
    },
    logIn: (store, action) => {
      store.loggedIn = action.payload
    },
    logOut: (store, action) => {
      store.accessToken = null
    },
    setRestaurants: (store, action) => {
      store.restaurants = action.payload
    },
    setRestaurant: (store, action) => {
      store.restaurant = action.payload
    }
    // setResId: (store, action)=> {
    //   store.resId = action.payload
    // }
  }
})

export default user