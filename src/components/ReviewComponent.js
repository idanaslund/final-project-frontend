import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_URL, REVIEWS } from 'utils/urls'

import ReviewForm from 'components/ReviewForm'
import ReviewList from 'components/ReviewList'

import user from 'reducers/user'
import restaurant from 'reducers/restaurant'

export const ReviewComponent = ({ reviews, updateLikes }) => {
  const [newReview, setNewReview] = useState('')
  const [counter, setCounter] = useState(0)

  const accessToken = useSelector((store) => store.user.accessToken)
  // const userId = JSON.parse(localStorage.getItem('user'))?.userId
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

    console.log(restaurant)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({
        review: newReview,
        _id: user._id,
        resId: restaurant._id
      })
    }
   
    // console.log(options.body.resId)
    if (accessToken) {
      fetch('http://localhost:8080/reviews', options)
        .then(res => res.json())
        .then(() => {
          setNewReview('')
          // console.log('newReview', newReview)
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
      />
      <ReviewList
        reviews={reviews}
        updateLikes={updateLikes} />

    </div>
  )
}