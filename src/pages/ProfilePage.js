// The user can save restaurants in their page
// The user can give reviews on restaurants when visited
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { EDIT_USER } from '../utils/urls'



const ProfilePage = () => {

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

      const user = useSelector(store => store.account)

      const [email, setEmail] = useState(user.email)
      const [fullName, setFullName ] = useState(user.fullName)
      const [profileImage, setProfileImage] = useState(user.profileImage)
      const [password, setPassword] = useState(user.password)

      const dispatch = useDispatch()

    //   const onFormSubmit = (event) => {
    //       event.preventDefault()
    //   }

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': user.accessToken
        },
        body: JSON.stringify({ email: email, fullName: fullName, profileImage: profileImage, password: password })
      }
  
      fetch(EDIT_USER(user.id), options)
      .then(res => res.json())
      .then(data => {
          if (data.success) {
              dispatch(user.actions.setProfileInfo(data.updateUser))

            localStorage.setItem('user', JSON.stringify({
                email: data.email,
                fullName: data.fullName,
                profileImage: profileImage,
                password: password
            }))
          } else {
              dispatch(user.actions.setErrors(data))
          }
      })
      .finally(() => {
          setEmail(user.email)
          setFullName(user.setFullName)
          setProfileImage(user.setProfileImage)
          setPassword(user.setPassword)
      })


    return (

        <>
        <h1>This is your profile page</h1>

        <p>`Welcome, ${user.fullName}`</p>



        <button
        type="button" onClick={onBackButtonClick}
        >Go back</button>

        </>


    )
}


export default ProfilePage 