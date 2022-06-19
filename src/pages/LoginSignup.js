import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { batch, useDispatch, useSelector } from 'react-redux'
import { API_URL } from 'utils/urls'
import { LoginSignupForm, LoginSignupChoice, LoginSignupPage } from 'theme/styles'

import user from 'reducers/user'

const LoginSignup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState(useSelector((store) => store.user.fullName))
    const [phone, setPhone] = useState(useSelector((store) => store.user.phone))
    const [bio, setBio] = useState(useSelector((store) => store.user.bio))
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
          body: JSON.stringify({ username, email, password, fullName, phone, bio})
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
                dispatch(user.actions.setFullName(data.response.fullName))
                dispatch(user.actions.setPhone(data.response.phone))
                dispatch(user.actions.setBio(data.response.bio))
                dispatch(user.actions.setErrors(null))
    
                localStorage.setItem('user', JSON.stringify({
                  accessToken: data.response.accessToken,
                  userId: data.response.userId,
                  username: data.response.username,
                  email: data.response.email,
                  fullName: data.response.fullName,
                  phone: data.response.phone,
                  bio: data.response.bio
                }))
              })
            } else {
              batch(() => {
                dispatch(user.actions.setId(null))
                dispatch(user.actions.setUsername(null))
                dispatch(user.actions.setEmail(null))
                dispatch(user.actions.setAccessToken(null))
                dispatch(user.actions.setFullName(null))
                dispatch(user.actions.setPhone(null))
                dispatch(user.actions.setBio(null))
                dispatch(user.actions.setErrors(data.response))
              })
              setError('Something went wrong, try again.')
            }
          })
      }

    return (
        <LoginSignupPage>
            <div className='loginSignupContainer'>
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
        </LoginSignupPage>
    )
}

export default LoginSignup