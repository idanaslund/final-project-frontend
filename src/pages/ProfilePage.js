import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../theme/reusable'
import { MarginSection } from '../theme/reusable'

import user from 'reducers/user'
import { EDIT_USER } from '../utils/urls'

const ProfilePage = () => {
  const [fullName, setFullName] = useState(useSelector((store) => store.user.fullName))
  const [phone, setPhone] = useState(useSelector((store) => store.user.phone))
  const [bio, setBio] = useState(useSelector((store) => store.user.bio))
  const [error, setError] = useState('')

  const accessToken = JSON.parse(localStorage.getItem('user'))?.accessToken
  const userId = JSON.parse(localStorage.getItem('user'))?.userId
  const username = JSON.parse(localStorage.getItem('user'))?.username
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onBackButtonClick = () => navigate(-1)

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({ 
        fullName, 
        phone, 
        bio  
      })            
    }

    fetch(EDIT_USER(userId), options) 
      .then(res => res.json())
      .then(data => {
        if (data.success) {        
            console.log(data)
            batch(() => {
              dispatch(user.actions.setFullName(data.response.fullName))
              dispatch(user.actions.setPhone(data.response.phone))
              dispatch(user.actions.setBio(data.response.bio))
              dispatch(user.actions.setErrors(null))

          localStorage.setItem('user', JSON.stringify({
            fullName: data.response.fullName,
            phone: data.response.phone,
            bio: data.response.bio
          }))
          alert('Your information has been updated!')
        })
        } else {
          dispatch(user.actions.setErrors(data))
        }
        setError('Something went wrong, try again.')
      })
  }

  return (
    <MarginSection>
      <h2>{username}</h2>
      <p>Bio: {bio}</p>

      <h3>Your information</h3>
      <p>Full name: {fullName}</p>
      <p>Phone number: {phone}</p>
      

      <h3>Update your information</h3>

      <form onSubmit={onFormSubmit}>
        <label htmlFor="fullName">Your full name</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <label
          htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <label
          htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <button type="submit">Submit new info</button>
      </form>
      <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </MarginSection>
  )
}

export default ProfilePage 