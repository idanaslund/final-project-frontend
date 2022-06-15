import React, { useEffect, useState } from 'react'       ///  Component
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
import styled from 'styled-components'

import { API_URL } from 'utils/urls'

import user from 'reducers/user'

const FilteringPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const [restaurants, setRestaurants] = useState ([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]) 
  // const [resId, setResId] = useState ([])
  const [typeOfFoodFilter, setTypeOfFoodFilter] = useState([]) // Lägg till alla filter som är arrays
  // const [mealsFilter, setMealsFilter] = useState([])           Nytt filter, se mer på rad 86

  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  useEffect(() => {
    if (accessToken) {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      }

      fetch(API_URL('restaurants'), options)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            console.log(json)
       
            batch(() => {
              setRestaurants(json.response)
              // setResId(json.response)
              // dispatch(user.actions.setRestaurants(data.restaurants))
              dispatch(user.actions.setErrors(null))
            })
          } else {
            dispatch(user.actions.setErrors(json.response))
          }
        })   
    }
  }, [accessToken, dispatch])

  useEffect(() => { // Lägg till if-satser 

    // if (typeOfFoodFilter.length > 0) 
      const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.type_of_food.filter(type => typeOfFoodFilter.includes(type)).length > 0)
    
    //If somethingFilter.length > 0

    setFilteredRestaurants(filteredRestaurants) // Flytta längst ned  
    console.log(filteredRestaurants)
  }, [typeOfFoodFilter])           ///Lägg in alla useStates (Här ligger alla våra filter som är beroende av filtreringen)

  const updateTypeOfFoodFilter = (e) => {
    const { value, checked } = e.target
    console.log(`${value} is ${checked}`)
    console.log(typeOfFoodFilter)
    
    if(checked) {
      setTypeOfFoodFilter(arr => [...arr, value])
      console.log(typeOfFoodFilter)
    } else {
      setTypeOfFoodFilter(arr => arr.filter((type) => type !== value))
      console.log(typeOfFoodFilter)
    }
    
    console.log(e)
  }

  /// Nytt filter nedan, vet dock ej riktigt hur jag får till det i vår useEffect ovan... Var/hur placeras if-satserna?

  // const updateMealsFilter = (e) => {
  //   const { value, checked } = e.target
  //   console.log(`${value} is ${checked}`)
  //   console.log(mealsFilter)
    
  //   if(checked) {
  //     setMealsFilter(arr => [...arr, value])
  //     console.log(mealsFilter)
  //   } else {
  //     setMealsFilter(arr => arr.filter((type) => type !== value))
  //     console.log(mealsFilter)
  //   }
    
  //   console.log(e)
  // }


  

  return (
    <StyledRestaurantList>
      <form>Type of food
        <label>Nordic
        <input type="checkbox" value="Nordic" checked={typeOfFoodFilter.includes('Nordic')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Swedish
        <input type="checkbox" value="Swedish" checked={typeOfFoodFilter.includes('Swedish')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Italian
        <input type="checkbox" value="Italian" checked={typeOfFoodFilter.includes('Italian')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Asian
        <input type="checkbox" value="Asian" checked={typeOfFoodFilter.includes('Asian')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Spanish
        <input type="checkbox" value="Spanish" checked={typeOfFoodFilter.includes('Spanish')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>American
        <input type="checkbox" value="American" checked={typeOfFoodFilter.includes('American')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>European
        <input type="checkbox" value="European" checked={typeOfFoodFilter.includes('European')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Mediterranian
        <input type="checkbox" value="Mediterranian" checked={typeOfFoodFilter.includes('Mediterranian')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Japanese
        <input type="checkbox" value="Japanese" checked={typeOfFoodFilter.includes('Japanese')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Latin American
        <input type="checkbox" value="Latin American" checked={typeOfFoodFilter.includes('Latin American')} onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Middle Eastern
        <input type="checkbox" value="Middle Eastern" checked={typeOfFoodFilter.includes('Middle Eastern')} onChange={updateTypeOfFoodFilter}/>
        </label>
        
      </form>


{/* CHECKBOXAR TILL NYA FILTRET SAMT ÖVRIGA, LÄNGST NED RADIOS FÖR BOOLEANS  */}
      {/* <form>Meals
        <label>Breakfast
        <input type="checkbox" value="Breakfast" checked={mealsFilter.includes('Breakfast')} onChange={updateMealsFilter}/>
        </label>
        <label>Brunch
        <input type="checkbox" value="Brunch" checked={mealsFilter.includes('Brunch')} onChange={updateMealsFilter}/>
        </label>
        <label>Lunch
        <input type="checkbox" value="Lunch" checked={mealsFilter.includes('Lunch')} onChange={updateMealsFilter}/>
        </label>
        <label>Dinner
        <input type="checkbox" value="Dinner" checked={mealsFilter.includes('Dinner')} onChange={updateMealsFilter}/>
        </label>
      </form> */}

      {/* <form> Budget
        <label>Low
        <input type="checkbox" value="Low" checked={ETTFILTER.includes('Low')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium" checked={mealsFilter.includes('Medium')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>High
        <input type="checkbox" value="High" checked={mealsFilter.includes('High')} onChange={UPDATEETTFILTER}/>
        </label>
      </form>

      <form> Portion size
        <label>Small
        <input type="checkbox" value="Small" checked={ETTFILTER.includes('Small')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium" checked={ETTFILTER.includes('Medium')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Large
        <input type="checkbox" value="Large" checked={ETTFILTER.includes('Large')} onChange={UPDATEETTFILTER}/>
        </label>
      </form>

      <form> Target audience
        <label>Group
        <input type="checkbox" value="Group" checked={ETTFILTER.includes('Group')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Date
        <input type="checkbox" value="Date" checked={ETTFILTER.includes('Date')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Family
        <input type="checkbox" value="Family" checked={ETTFILTER.includes('Family')} onChange={UPDATEETTFILTER}/>
        </label>
      </form>

      <form> Restaurant focus
        <label>Low
        <input type="checkbox" value="Vegan" checked={ETTFILTER.includes('Family')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Medium
        <input type="checkbox" value="Vegetarian" checked={ETTFILTER.includes('Family')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>High
        <input type="checkbox" value="Fish" checked={ETTFILTER.includes('Family')} onChange={UPDATEETTFILTER}/>
        </label>
        <label>Low
        <input type="checkbox" value="Meat" checked={ETTFILTER.includes('Family')} onChange={UPDATEETTFILTER}/>
        </label>
      </form>  */}
     
    {/* <form>Dogfriendly
        <label>Yes
        <input type="radio" value="true"/>
        </label>
        <label>No
        <input type="radio" value="false"/>
        </label>
      </form>

      <form>Outdoor area
        <label>Yes
        <input type="radio" value="true"/>
        </label>
        <label>No
        <input type="radio" value="false"/>
        </label>
      </form> */}

  


      
      {filteredRestaurants.length == 0 ? (                        ///// Här ska det vara filteredRestaurants.length == 0
        <div className='restaurantListPage'>
        {restaurants.map(restaurant => (
          <Link key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
              <div className='restaurantCard'>
               <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
               <div>
                  <h2>{restaurant.name}</h2>
               </div>
               </div>
            </Link>

        ))}
        </div>
        ) : (
          <div className='restaurantListPage'>
          {filteredRestaurants.map(restaurant => (
            <Link key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
                <div className='restaurantCard'>
                 <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
                 <div>
                    <h2>{restaurant.name}</h2>
                 </div>
                 </div>
              </Link>
          ))}
          </div>
          
        )}

      

      <button
      type="button" onClick={() => navigate('/logout')}>
      Log out
      </button>
    </StyledRestaurantList>
  )
}

export default FilteringPage

const StyledRestaurantList = styled.main`
  .restaurantListPage {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    padding: 10px;
  }

  .restaurantImage {
    width: 100%;
    max-height: 140px;

  }

  .restaurantListPage a {
    width: 25%;
    color: black;
    text-decoration: none;
  }

  .restaurantCard {
    margin: 5px;
    border: solid 1px black;
  }

  h2 {
    font-size: 12px;
  }
`