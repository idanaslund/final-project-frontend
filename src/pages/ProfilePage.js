import React, { useState } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackButton, MarginSection, SubmitButton, Paragraph, SecondHeader } from '../theme/reusable'
import { ProfileWrapper, ProfileInput, ProfileForm } from '../theme/styles'

import user from 'reducers/user'
import { EDIT_USER } from '../utils/urls'

const ProfilePage = () => {
  const [fullName, setFullName] = useState(useSelector((store) => store.user.fullName))
  const [phone, setPhone] = useState(useSelector((store) => store.user.phone))
  const [bio, setBio] = useState(useSelector((store) => store.user.bio))
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

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
          setError('Something went wrong, try again.')
        }
      })
  }

  
  return (
    <MarginSection>
      <ProfileWrapper>
        <SecondHeader>Your profile</SecondHeader>
      <Paragraph>Username: {username}</Paragraph>
      <p>Bio: {bio}</p>

      <SecondHeader>Your information</SecondHeader>
      <p>Full name: {fullName}</p>
      <p>Phone number: {phone}</p>
      
      </ProfileWrapper>

      <ProfileWrapper>
        <SecondHeader>Update your information</SecondHeader>
        <SubmitButton
          type="button"
          onClick={() => setVisible(!visible)}
        >
          Settings
        </SubmitButton>

        {visible && (
          <>
            <ProfileForm onSubmit={onFormSubmit}>
              <div>
            <label htmlFor="fullName">Your full name:</label>
            <ProfileInput
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            </div>

            <div>
            <label
              htmlFor="phone">Phone number:</label>
            <ProfileInput
              id="phone"
              type="number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            </div>
            <div>
            <label
              htmlFor="bio">Bio:</label>
                </div>
            <ProfileInput
              id="bio"
              type="text"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          
            <SubmitButton type="submit">Submit info</SubmitButton>
          </ProfileForm>
          <Paragraph>{error}</Paragraph>
        </>
        )}
      </ProfileWrapper>
      <BackButton type="button" onClick={onBackButtonClick}>Go back</BackButton>
    </MarginSection>
  )
}

export default ProfilePage 