import React from 'react'


const reducer = combineReducers({
  user: user.reducer,
  reviews: reviews.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  )
}