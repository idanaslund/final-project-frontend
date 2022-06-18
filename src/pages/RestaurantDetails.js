import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, batch, useSelector } from 'react-redux'  
import { Link } from 'react-router-dom'                  

import user from 'reducers/user'

import { ReviewComponent } from 'components/ReviewComponent'
import { MarginSection, Paragraph, BackButton, GetInspiredButton, SecondHeader } from '../theme/reusable'
import { ImageWrapper, ButtonBox } from '../theme/styles'

export const RestaurantDetails = ({website}) => {

  const accessToken = useSelector((store) => store.user.accessToken)

  const { id } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onBackButtonClick = () => {
    navigate(-1)
  }

  const onGetInspiredButtonClick = () => {
    navigate('/reviews')
  }


  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])


  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', Authorization: accessToken

        },
      }

    fetch(`http://localhost:8080/restaurants/${id}`, options)
      .then(res => res.json())
      .then((json) => {
        console.log('json', json.response)
        // console.log('json', restaurant)
        if (json.success) {
          batch(() => {
            setRestaurant(json.response)
            console.log('json.response', json.response)
            dispatch(user.actions.setErrors(null))

          })
        } else {
          dispatch(user.actions.setErrors(json.response))
        }
      })
    }, [dispatch, id, accessToken])

  if (restaurant === null) {
      return <p></p>
  }

  return (
    <MarginSection>
      <article>
        {restaurant && (
          <div>

            <div key={restaurant.id}>
          
        
              <ImageWrapper src={restaurant.image_URL} alt={restaurant.name} />
           
              <div>
                <SecondHeader>{restaurant.name}</SecondHeader>
                <Paragraph>{restaurant.description}</Paragraph>
              </div>
         
            </div>
            
          </div>
         
        )}
        <ReviewComponent 
        restaurant={restaurant.name}/>

      <div><Link to={`{restaurant.website}`}>Website</Link></div>
      </article>

    <ButtonBox>
      <BackButton onClick={onBackButtonClick}>Go back</BackButton>
      <GetInspiredButton onClick={onGetInspiredButtonClick}>Read more reviews</GetInspiredButton>
      </ButtonBox>
      
    </MarginSection>
  )
}