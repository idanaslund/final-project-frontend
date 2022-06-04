import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user') ? {
  id: JSON.parse(localStorage.getItem('user')).id,
  username: JSON.parse(localStorage.getItem('user')).username,
  email: JSON.parse(localStorage.getItem('user')).email,
  fullName: JSON.parse(localStorage.getItem('user')).fullName,
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
  fullName: null, 
  profileImage: null, 
  accessToken: null, 
  errors: null, 
  signup: false
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setID: (store, action) => {
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
    setProfileInfo: (store, action) => {
      store.fullName = action.payload.fullName
      store.profileImage = action.payload.profileImage
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
      store.id = null
      store.username = null
      store.email = null
    },
    setRestaurants: (store, action) => {
      store.restaurants = action.payload
    },
    setRestaurant: (store, action) => {
      store.restaurant = action.payload
    }
  }
})

export default user