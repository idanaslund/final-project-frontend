// Login- and sign up function
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { batch, useDispatch, useSelector } from 'react-redux'
import { API_URL } from 'utils/urls'

import user from 'reducers/user'

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
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, email: email, password: password})
        }
        console.log(API_URL(mode))
        fetch(API_URL(mode), options)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              if (data.success) {
                batch(() => {
                    dispatch(user.actions.setID(data.response.id))
                    dispatch(user.actions.setUsername(data.response.username))
                    dispatch(user.actions.setEmail(data.response.email))
                    dispatch(user.actions.setAccessToken(data.response.accessToken))
                    dispatch(user.actions.setErrors(null))
                })
              } else {
                  console.log(data)
                batch(() => {
                    dispatch(user.actions.setID(null))
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
        <div>
            {mode === 'login' && (
                <div>
                    <h1>LOG IN</h1>
                    <label htmlFor='signup'>Register here:</label>
                    <input 
                        type='radio'
                        id='signup'
                        checked={mode === 'signup'}
                        onChange={() => setMode('signup')}
                    />
                </div>
            )}
            {mode === 'signup' && (
                <div>
                    <h1>REGISTRATION</h1>
                    <label htmlFor='login'>Log in here:</label>
                    <input 
                        type='radio'
                        id='login'
                        checked={mode === 'login'}
                        onChange={() => setMode('login')}
                    />
                </div>
            )}

            <form onSubmit={onFormSubmit}>
                <input 
                    type='text'
                    id='username'
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input 
                    type='email'
                    id='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    type='password'
                    id='id'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                {mode === 'login' && (
                    <button type='submit'>Log in</button>
                )}
                {mode === 'signup' && (
                    <button type='submit'>Register</button>
                )}
                <p>{error}</p>
            </form>
        </div>
    )
}

export default LoginSignup