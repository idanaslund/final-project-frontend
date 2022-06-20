import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { useDispatch, batch, useSelector } from 'react-redux'  

import { API_URL } from 'utils/urls'

import user from 'reducers/user'

import { ReviewComponent } from 'components/ReviewComponent'
import { MarginSection, BackButton, GetInspiredButton, SecondHeader } from '../theme/reusable'
import { ImageWrapper, ButtonBox, LinkContainer, RestaurantAddress, RestaurantDescription, OpenHoursContainer, ListedHours, TypeOfFood, RestaurantLink } from '../theme/styles'
import BookATable from 'components/BookATable'

export const RestaurantDetails = () => { 

  const accessToken = useSelector((store) => store.user.accessToken)

  const [restaurant, setRestaurant] = useState({})
  const [types, setTypes] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

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

    fetch(API_URL(`restaurants/${id}`), options)
      .then(res => res.json())
      .then((json) => {
        if (json.success) {
          batch(() => {
            setRestaurant(json.response)
            setTypes(json.response.type_of_food)
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

                <RestaurantLink href={restaurant.website}>Website</RestaurantLink>
                  
                </LinkContainer>
               
               {types.length > 1 ? (
                types.map(type => (
                  <TypeOfFood key={type}>{type}</TypeOfFood>
                ))
               ) :(
                <TypeOfFood key="typeoffood">{types}</TypeOfFood >
                )}

               
                <RestaurantDescription>{restaurant.description}</RestaurantDescription>
             
             <div>
                <BookATable /></div>
            


            <OpenHoursContainer>
              <SecondHeader>Opening hours</SecondHeader>
              <ListedHours>
                Monday: &nbsp;
               {restaurant.opening_hours_mon}</ListedHours>
              <ListedHours> Tuesday: &nbsp;
              {restaurant.opening_hours_tue}
              </ListedHours>
              <ListedHours> Wednesday: &nbsp;
              {restaurant.opening_hours_wed}
              </ListedHours>
              <ListedHours>Thursday: &nbsp;
              {restaurant.opening_hours_thur}
              </ListedHours>
              <ListedHours> Friday: &nbsp;
              {restaurant.opening_hours_fri}
              </ListedHours>
              <ListedHours>Saturday: &nbsp;
              {restaurant.opening_hours_sat}
              </ListedHours>
              <ListedHours>Sunday: &nbsp;
              {restaurant.opening_hours_sun}
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