import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import LandingPage from './pages/LandingPage'
import FilteringPage from 'pages/FilteringPage'
import NotFound from 'pages/NotFound'
import About from 'pages/About'
import LogOut from 'pages/Logout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ProfilePage from 'pages/ProfilePage'
import ReviewList from 'pages/ReviewList'
import { RestaurantDetails } from 'pages/RestaurantDetails'
import GlobalStyle from './theme/globalStyle'
import { Container } from './theme/reusable'

import user from 'reducers/user'

const reducer = combineReducers({
  user: user.reducer,
})

const store = configureStore({ 
  reducer: reducer 
})

export const App = () => {
  return (
  
    <BrowserRouter>
    <GlobalStyle />
      <Provider store={store}>
        <main>
          <Header />
          <Container>
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route path="/restaurants" element={<FilteringPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetails />} />
            <Route path="/reviews" element={<ReviewList />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
          </Container> 
          <Footer />
        </main>
      </Provider>
    </BrowserRouter>
  )
}