import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
// import styled from 'styled-components'
import { API_URL } from 'utils/urls'

import user from 'reducers/user'

export const RestaurantDetails = () => {

  const accessToken = useSelector((store) => store.user.accessToken)
  // const restaurant = useSelector((store) => store.user.restaurant)

  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  useEffect(() => {
    fetch(API_URL('restaurants'))
      .then(res => res.json())
      .then((json) => {
        if (json.success) {
          batch(() => {
            setRestaurant(json.data)
            dispatch(user.actions.setErrors(null))
          })
        } else {
          dispatch(user.actions.setErrors(json.response))
        }
      }, [id])
  }, [accessToken, dispatch])

  return (
    <main>
      <article>
        {restaurant && (
          <div>
            <h1>HI</h1>
            <button onClick={onBackButtonClick}>Go back</button>
            <div key={restaurant.id}>
              <img src={restaurant.image_URL} alt={restaurant.name} />
              <div>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  )
}