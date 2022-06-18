import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_URL, REVIEWS } from 'utils/urls'

import ReviewForm from 'components/ReviewForm'
// import ReviewList from 'pages/ReviewList'

import user from 'reducers/user'

export const ReviewComponent = ({ restaurant }) => {                  ////reviews, updateLikes
  const [newReview, setNewReview] = useState('')
  const [counter, setCounter] = useState(0)

  const accessToken = useSelector((store) => store.user.accessToken)
  const author = JSON.parse(localStorage.getItem('user'))?.username
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
    console.log(user)
  }, [accessToken, navigate])
  

  const handleNewReviewChange = (event) => {
    setNewReview(event.target.value)
    setCounter(event.target.value.length)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({
        review: newReview,
        author: author,
        restaurant: restaurant
      })
    }
   

    if (accessToken) {
      fetch('http://localhost:8080/reviews', options)
        .then(res => res.json())
        .then(() => {
          setNewReview('')
          console.log('newReview', newReview)
          setCounter(0)
        })
    }
  }
  

  return (
    <div>
      <ReviewForm 
        newReview={newReview}
        setNewReview={setNewReview}
        onNewReviewChange={handleNewReviewChange}
        onFormSubmit={onFormSubmit}
        counter={counter}
        restaurant={restaurant}
      />
    </div>
  )
}