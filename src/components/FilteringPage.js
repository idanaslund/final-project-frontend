import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'

import { API_URL } from 'utils/urls'

import user from 'reducers/user'

const FilteringPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    batch(() => {
      dispatch(user.actions.setUsername)
      dispatch(user.actions.setEmail)
      dispatch(user.actions.setAccessToken)
    })
  }

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  useEffect(() => {
    if (accessToken) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      }

      fetch(API_URL('restaurants'), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            batch(() => {
              // dispatch(user.actions.setRestaurants(data.restaurants))
              dispatch(user.actions.setErrors(null))
            })
          } else {
            dispatch(user.actions.setErrors(data.response))
          }
        }) 
    }
  }, [accessToken, dispatch])

  return (
    <h1>Restaurants</h1>
  )
}

export default FilteringPage