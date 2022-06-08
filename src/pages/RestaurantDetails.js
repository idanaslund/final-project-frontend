import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
// import styled from 'styled-components'
import { RES_ID } from 'utils/urls'

import user from 'reducers/user'



export const RestaurantDetails = () => {

  // const accessToken = useSelector((store) => store.user.accessToken)
  // const restaurant = useSelector((store) => store.user.restaurant)

  const { name } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch() 

  const onBackButtonClick = () => {
    navigate(-1)
  }

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

    fetch(RES_ID (name), options)
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        if (json.success) {
          batch(() => {
            setRestaurant(json.response)
            dispatch(user.actions.setErrors(null))
            
          })
        } else {
          dispatch(user.actions.setErrors(json.response))
        }
      })
    }, [dispatch, name])

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
            <div key={restaurant.name}>
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