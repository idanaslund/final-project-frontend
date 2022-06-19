import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user') ? {
  id: JSON.parse(localStorage.getItem('user')).userId,
  username: JSON.parse(localStorage.getItem('user')).username,
  email: JSON.parse(localStorage.getItem('user')).email,
  profileImage: JSON.parse(localStorage.getItem('user')).profileImage,
  accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
  fullName: JSON.parse(localStorage.getItem('user')).fullName,
  phone: JSON.parse(localStorage.getItem('user')).phone,
  bio: JSON.parse(localStorage.getItem('user')).bio,
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
  fullName: null,
  phone: null,
  bio: null,
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
    setFullName: (store, action) => {
      store.fullName = action.payload
    },
    setPhone: (store, action) => {
      store.phone = action.payload
    },
    setBio: (store, action) => {
      store.bio = action.payload
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
    }
  }
})

export default user