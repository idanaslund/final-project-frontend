import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import { useDispatch, batch, useSelector } from 'react-redux'             

import user from 'reducers/user'

import { ReviewComponent } from 'components/ReviewComponent'
import { MarginSection, BackButton, GetInspiredButton, SecondHeader } from '../theme/reusable'
import { ImageWrapper, ButtonBox, LinkContainer, RestaurantAddress, RestaurantDescription, OpenHoursContainer, ListedHours, TypeOfFood } from '../theme/styles'
import BookATable from 'components/BookATable'

export const RestaurantDetails = ({website, address, opening_hours_mon, opening_hours_tue, opening_hours_wed, opening_hours_thur, opening_hours_fri, opening_hours_sat, opening_hours_sun, type_of_food}) => {

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
              
         
            
                <SecondHeader>{restaurant.name}</SecondHeader>
                <RestaurantAddress>{restaurant.address}</RestaurantAddress>
                <LinkContainer>

                <a href={restaurant.website}>Website</a>
                  
                </LinkContainer>

                <TypeOfFood>{restaurant.type_of_food}</TypeOfFood>
               
                <RestaurantDescription>{restaurant.description}</RestaurantDescription>
             
             <div>
                <BookATable /></div>
            


            <OpenHoursContainer>
              <SecondHeader>Opening hours</SecondHeader>
              <ListedHours>
                Monday: &nbsp;
               {restaurant.opening_hours_mon}</ListedHours>
              <ListedHours> Tuesday: &nbsp;
              {restaurant. opening_hours_tue}
              </ListedHours>
              <ListedHours> Wednesday: &nbsp;
              {restaurant. opening_hours_wed}
              </ListedHours>
              <ListedHours>Thursday: &nbsp;
              {restaurant. opening_hours_thur}
              </ListedHours>
              <ListedHours> Friday: &nbsp;
              {restaurant. opening_hours_fri}
              </ListedHours>
              <ListedHours>Saturday: &nbsp;
              {restaurant. opening_hours_sat}
              </ListedHours>
              <ListedHours>Sunday: &nbsp;
              {restaurant. opening_hours_sun}
              </ListedHours>
              </OpenHoursContainer>
              
           <div>
              
              
              </div>
            
            </div>
            
          </div>
         
        )}
        <ReviewComponent 
        restaurant={restaurant.name}/>


    
      </article>


    <ButtonBox>
      <BackButton onClick={onBackButtonClick}>Go back</BackButton>
      <GetInspiredButton onClick={onGetInspiredButtonClick}>Read more reviews</GetInspiredButton>
      </ButtonBox>

  
      
    </MarginSection>
  )
}