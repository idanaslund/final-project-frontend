import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
            <article>
                <h3>Are you sure you want to log out?</h3>
                <button
                type="button" onClick={() => dispatch(user.actions.logOut())}
                >Log out</button>

                <button
                type="button" onClick={onBackButtonClick}
                >No, go back</button>
            </article>
    )
}

export default LogOut