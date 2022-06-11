import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import user from 'reducers/user'
import { EDIT_USER } from '../utils/urls'

const ProfilePage = () => {
  const [email, setEmail] = useState(useSelector((store) => store.user.email))
  const [username, setUsername] = useState(useSelector((store) => store.user.username))
  const [userId, setUserId] = useState(useSelector((store) => store.user.id))
  const [profileImage, setProfileImage] = useState("")
  const [password, setPassword] = useState("")

  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;

  const navigate = useNavigate()

  const onBackButtonClick = () => navigate(-1)

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({ email, username, profileImage, password })
    }

    fetch(EDIT_USER(userId), options) //behöver förmodligen ändra id här
      .then(res => res.json())
      .then(data => {
        if (data.success) {

          localStorage.setItem('user', JSON.stringify({
            email: data.updateUser.email,
            username: data.updateUser.username,
            accessToken: data.updateUser.accessToken,
            userId: data.updateUser._id
          }))

          setUserId(data.updateUser._id)
          setEmail(data.updateUser.email)
          setUsername(data.updateUser.username)
        } else {
          dispatch(user.actions.setErrors(data))
        }
      })
  }

  return (
    <>
      <h1>This is your profile page</h1>
      <p>Welcome {username}</p>
      <p>Email: {email}</p>
      <p>Profile image:</p>

      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label
          htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label
          htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
    </>
  )
}

export default ProfilePage 