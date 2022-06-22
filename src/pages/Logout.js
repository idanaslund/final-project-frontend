import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOutPage } from 'theme/styles'
import { BackButton, DarkGreenHeader, LogOutButton } from '../theme/reusable'
import user from 'reducers/user'

const LogOut = () => {

    const accessToken = useSelector((store) => store.user.accessToken)

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


    return(
      <LogOutPage>
        <div className='LogOutContainer'>
          <DarkGreenHeader>Are you sure you want to log out?</DarkGreenHeader>
          <div className='buttonContainer'>
            
            <BackButton
              type="button" onClick={onBackButtonClick}>
              No, go back
            </BackButton>
            <LogOutButton
              type="button" onClick={() => dispatch(user.actions.logOut())} className="logoutButton"
            >
              Log out
            </LogOutButton>
          </div>
        </div>
      </LogOutPage>
            
    )
}

export default LogOut