import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, batch, useSelector } from 'react-redux'                      ///useSelector
// import styled from 'styled-components'
// import { RES_ID } from 'utils/urls'

import user from 'reducers/user'

import { ReviewComponent } from 'components/ReviewComponent'

export const RestaurantDetails = () => {

  const accessToken = useSelector((store) => store.user.accessToken)
  // const restaurant = useSelector((store) => store.user.restaurant)

  const { id } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  // useEffect(() => {
  //   console.log(restaurantId)
  // }, [])

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])


  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', Authorization: accessToken

        },
      }

    fetch(`http://localhost:8080/restaurants/${id}`, options)
      .then(res => res.json())
      .then((json) => {
        console.log('json', json.response)
        // console.log('json', restaurant)
        if (json.success) {
          batch(() => {
            setRestaurant(json.response)
            console.log('json.response', json.response)
            dispatch(user.actions.setErrors(null))

          })
        } else {
          dispatch(user.actions.setErrors(json.response))
        }
      })
    }, [dispatch, id])

  if (restaurant === null) {
      return <p></p>
  }

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
        <ReviewComponent />
      </article>
    </main>
  )
}