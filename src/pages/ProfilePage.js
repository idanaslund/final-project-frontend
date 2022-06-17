import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Paragraph, BackButton } from '../theme/reusable'


import user from 'reducers/user'
import { EDIT_USER } from '../utils/urls'

const ProfilePage = () => {
  // const [userId, setUserId] = useState(useSelector((store) => store.user.id))
  const [fullName, setFullName] = useState(useSelector((store) => store.user.fullName))
  const [phone, setPhone] = useState(useSelector((store) => store.user.phone))
  const [bio, setBio] = useState(useSelector((store) => store.user.bio))
  const [error, setError] = useState('')

  const accessToken = JSON.parse(localStorage.getItem('user'))?.accessToken
  const userId = JSON.parse(localStorage.getItem('user'))?.userId
 
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
      body: JSON.stringify({ fullName, phone, bio  })            
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
          // setFullName(data.response.fullName)
          // setPhone(data.response.phone)
          // setBio(data.response.bio)


        } else {
          dispatch(user.actions.setErrors(data))
        }
        setError('Something went wrong, try again.')
      })
  }

  return (
    <>
      <h1>This is your profile page</h1>

      <p>Welcome {fullName}</p>
      <p>Phone number: {phone}</p>
      <p>Bio: {bio}</p>

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
          type="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <label
          htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="bio"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <button type="submit">Submit new info</button>
      </form>
      <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </>
  )
}

export default ProfilePage 