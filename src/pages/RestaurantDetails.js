import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, batch } from 'react-redux'                      ///useSelector
// import styled from 'styled-components'
import { RES_ID } from 'utils/urls'

import user from 'reducers/user'

import { ReviewComponent } from 'components/ReviewComponent'

export const RestaurantDetails = () => {

  // const accessToken = useSelector((store) => store.user.accessToken)
  // const restaurant = useSelector((store) => store.user.restaurant)

  const { id } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch() 

  const onBackButtonClick = () => {
    navigate(-1)
  }

  // const location = useLocation()
  // const { restaurantId } = location.state

  // useEffect(() => {
  //   console.log(restaurantId)
  // }, [])

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/')
  //   }
  // }, [accessToken, navigate])

  // useEffect(() => {
  //   if (accessToken) {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: accessToken,
  //       },
  //     }

  //   fetch(RES_ID ('_id'), options)
  //     .then(res => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       if (json.success) {
  //         batch(() => {
  //           setRestaurant(json.response)
  //           dispatch(user.actions.setErrors(null))
            
  //         })
  //       } else {
  //         dispatch(user.actions.setErrors(json.response))
  //       }
  //     })
  //   }
  // }, [accessToken, dispatch, id])


  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }

    fetch(`http://localhost:8080/restaurants/${id}`, options)
      .then(res => res.json())
      .then((json) => {
        // console.log('id', restaurantId)
        console.log('json', json)
        console.log('restaurant.id', restaurant.id)
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
              {console.log('restaurant', restaurant)}
              <img src={restaurant.image_URL} alt={restaurant.name} />
              <ReviewComponent />
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