import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_URL, REVIEWS } from 'utils/urls'

import ReviewForm from 'components/ReviewForm'

export const ReviewComponent = ({ restaurant }) => {                 
  const [newReview, setNewReview] = useState('')
  const [counter, setCounter] = useState(0)

  const accessToken = useSelector((store) => store.user.accessToken)
  const author = JSON.parse(localStorage.getItem('user'))?.username
  const navigate = useNavigate()


  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
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
      fetch(API_URL(REVIEWS), options)
        .then(res => res.json())
        .then(() => {
          setNewReview('')
          setCounter(0)
        })
        alert('Your review has been sent!')
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