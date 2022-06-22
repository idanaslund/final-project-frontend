import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from 'lotties/loginpageLottie'
import { batch, useDispatch, useSelector } from 'react-redux'
import { API_URL } from 'utils/urls'
import { LoginSignupForm, LoginSignupChoice, LoginSignupContainer, LoginSignupPage, LoginSlogan } from 'theme/styles'

import user from 'reducers/user'
import { MarginSection } from 'theme/reusable'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
}


const LoginSignup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mode, setMode] = useState('signup')
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const accessToken = useSelector((store) => store.user.accessToken)


    useEffect(() => {
        if (accessToken) {
            navigate('/restaurants')
        } 
    }, [accessToken, navigate])

    const onFormSubmit = (e) => {
        e.preventDefault()
    
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            username, 
            email, 
            password})
        }
    
        fetch(API_URL(mode), options)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              batch(() => {
                dispatch(user.actions.setId(data.response.userId))
                dispatch(user.actions.setUsername(data.response.username))
                dispatch(user.actions.setEmail(data.response.email))
                dispatch(user.actions.setAccessToken(data.response.accessToken))
                dispatch(user.actions.setErrors(null))
    
                localStorage.setItem('user', JSON.stringify({
                  accessToken: data.response.accessToken,
                  userId: data.response.userId,
                  username: data.response.username,
                  email: data.response.email,
                }))
              })
            } else {
              batch(() => {
                dispatch(user.actions.setId(null))
                dispatch(user.actions.setUsername(null))
                dispatch(user.actions.setEmail(null))
                dispatch(user.actions.setAccessToken(null))
                dispatch(user.actions.setErrors(data.response))
              })
              setError('Something went wrong, try again.')
            }
          })
      }

    return (
        <MarginSection>
            <LoginSignupPage>
            <LoginSlogan>Your private food matcher</LoginSlogan>


              <Lottie 
            options={defaultOptions}
              height={130}
              width={130}
              className="lottiestartpage"
            />
    
        <LoginSignupContainer>

            <div>
                {mode === 'login' && (
                    <LoginSignupChoice>
                        <h2>LOG IN</h2>
                        <div className='modeChoice'>
                            <label htmlFor='signup' className='modeQuestion'>
                                New user?
                            </label>
                            <input 
                                type='button'
                                id='signup'
                                value='Sign up'
                                onClick={() => setMode('signup')}
                                className='inputButton'
                            />
                        </div>
                    </LoginSignupChoice>
                )}
                {mode === 'signup' && (
                    <LoginSignupChoice>
                        <h2>REGISTRATION</h2>
                        <div className='modeChoice'>
                            <label htmlFor='login' className='modeQuestion'>
                                Already signed up?
                            </label>
                            <input 
                                type='button'
                                id='login'
                                value='Log in'
                                onClick={() => setMode('login')}
                                className='inputButton'
                            />
                        </div>
                    </LoginSignupChoice>
                )}

                <LoginSignupForm onSubmit={onFormSubmit}>
                    <input 
                        type='text'
                        id='username'
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className='input input-username'
                    />
                    <input 
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='input'
                    />
                    <input 
                        type='password'
                        id='id'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='input'
                    />
                    {mode === 'login' && (
                        <button type='submit'>Log in</button>
                    )}
                    {mode === 'signup' && (
                        <button type='submit'>Register</button>
                    )}
                    <p>{error}</p>
                </LoginSignupForm>
            </div>
        </LoginSignupContainer>
        </LoginSignupPage>
        </MarginSection>
    )
}

export default LoginSignup