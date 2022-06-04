import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import LandingPage from './components/LandingPage'
import FilteringPage from 'components/FilteringPage'
import { RestaurantDetails } from 'components/RestaurantDetails'

import user from 'reducers/user'

const reducer = combineReducers({
  user: user.reducer,
  // reviews: reviews.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <main>
         <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/restaurants" element={<FilteringPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        </Routes> 
        </main>
      </Provider>
    </BrowserRouter>
  )
}