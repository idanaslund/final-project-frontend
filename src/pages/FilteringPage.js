import React, { useEffect, useState } from 'react'       ///  Component
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
import styled from 'styled-components'

import { API_URL } from 'utils/urls'

import user from 'reducers/user'
import restaurant from 'reducers/restaurant'

const FilteringPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const [restaurants, setRestaurants] = useState ([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]) 
  const [resId, setResId] = useState ('')
  const [typeOfFoodFilter, setTypeOfFoodFilter] = useState([]) // Lägg till alla filter som är arrays
  const [mealsFilter, setMealsFilter] = useState([])          // Nytt filter, se mer på rad 86
  const [budgetFilter, setBudgetFilter] = useState([])
  const [portionSizeFilter, setPortionSizeFilter] = useState([])
  const [targetAudienceFilter, setTargetAudienceFilter] = useState([])
  const [restaurantFocusFilter, setRestaurantFocusFilter] = useState([])
  const [dogFriendlyFilter, setDogFriendlyFilter] = useState([])
  const [outdoorAreaFilter, setOutdoorAreaFilter] = useState([])

  
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
              setResId(json.response)
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

    // Type of Food
    if (typeOfFoodFilter.length > 0) {
      let filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.type_of_food.filter(type => typeOfFoodFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    } 
    // Meals
    if (mealsFilter.length > 0) {
      let filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.meals.filter(type => mealsFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants) // Flytta längst ned  
        console.log(filteredRestaurants)
    }
    // Budget
    if (budgetFilter.length > 0) {
      let filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.budget.filter(type => budgetFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // Portion size
    if (portionSizeFilter.length > 0) {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.portion_size.filter(type => portionSizeFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // Target audience
    if (targetAudienceFilter.length > 0) {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.target_audience.filter(type => targetAudienceFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // Restaurant focus
    if (restaurantFocusFilter.length > 0) {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.restaurant_focus.filter(type => restaurantFocusFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // Dog friendly - FUNGERAR EJ
    if (dogFriendlyFilter === true) {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.dogfriendly.filter(type => dogFriendlyFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // Outdoor area - FUNGERAR EJ
    if (outdoorAreaFilter === true) {
      const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.outdoor_area.filter(type => outdoorAreaFilter.includes(type)).length > 0)
        setFilteredRestaurants(filteredRestaurants)
        console.log(filteredRestaurants)
    }
    // setFilteredRestaurants(filteredRestaurants)

  }, [restaurants, typeOfFoodFilter, mealsFilter, budgetFilter, portionSizeFilter, targetAudienceFilter, restaurantFocusFilter, dogFriendlyFilter, outdoorAreaFilter])           ///Lägg in alla useStates (Här ligger alla våra filter som är beroende av filtreringen)

  // Type of Food
  const updateTypeOfFoodFilter = (e) => {
    const { value, checked } = e.target
    // console.log(`${value} is ${checked}`)
    // console.log(typeOfFoodFilter)
    if(checked) {
      setTypeOfFoodFilter(arr => [...arr, value])
    } else {
      setTypeOfFoodFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Meals
  const updateMealsFilter = (e) => {
    const { value, checked } = e.target
    if(checked) {
      setMealsFilter(arr => [...arr, value])
    } else {
      setMealsFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Budget
  const updateBudgetFilter = (e) => {
    const { value, checked } = e.target
    if(checked) {
      setBudgetFilter(arr => [...arr, value])
    } else {
      setBudgetFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Portion size
  const updatePortionSizeFilter = (e) => {
    const { value, checked } = e.target

    if(checked) {
      setPortionSizeFilter(arr => [...arr, value])
    } else {
      setPortionSizeFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Target audience
  const updateTargetAudienceFilter = (e) => {
    const { value, checked } = e.target

    if(checked) {
      setTargetAudienceFilter(arr => [...arr, value])
    } else {
      setTargetAudienceFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Restaurant focus
  const updateRestaurantFocusFilter = (e) => {
    const { value, checked } = e.target

    if(checked) {
      setRestaurantFocusFilter(arr => [...arr, value])
    } else {
      setRestaurantFocusFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Dog friendly - fungerar ej
  const updateDogFriendlyFilter = (e) => {
    const { value } = e.target

    if(true) {
      setDogFriendlyFilter(arr => [...arr, value])
    } else {
      setDogFriendlyFilter(arr => arr.filter((type) => type !== value))
    }
  }
  // Outdoor area - fungerar ej
  const updateOutdoorAreaFilter = (e) => {
    const { value } = e.target

    if(true) {
      setOutdoorAreaFilter(arr => [...arr, value])
    } else {
      setOutdoorAreaFilter(arr => arr.filter((type) => type !== value))
    }
  }

  return (
  
    <StyledRestaurantList>

      <button
      type="button" onClick={() => navigate('/logout')}>
      Log out
      </button>

      <form>Type of food
        <label>Nordic
        <input type="checkbox" value="Nordic" onChange={updateTypeOfFoodFilter}/> {/*tog bort checked={typeOfFoodFilter.includes('Nordic')} och det fungerade lika. */}
        </label>
        <label>Swedish
        <input type="checkbox" value="Swedish" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Italian
        <input type="checkbox" value="Italian" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Asian
        <input type="checkbox" value="Asian" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Spanish
        <input type="checkbox" value="Spanish" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>American
        <input type="checkbox" value="American" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>European
        <input type="checkbox" value="European" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Mediterranian
        <input type="checkbox" value="Mediterranian" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Japanese
        <input type="checkbox" value="Japanese" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Latin American
        <input type="checkbox" value="Latin American" onChange={updateTypeOfFoodFilter}/>
        </label>
        <label>Middle Eastern
        <input type="checkbox" value="Middle Eastern" onChange={updateTypeOfFoodFilter}/>
        </label>
        
      </form>


{/* CHECKBOXAR TILL NYA FILTRET SAMT ÖVRIGA, LÄNGST NED RADIOS FÖR BOOLEANS  */}
      <form>Meals
        <label>Breakfast
        <input type="checkbox" value="Breakfast" onChange={updateMealsFilter}/>
        </label>
        <label>Brunch
        <input type="checkbox" value="Brunch" onChange={updateMealsFilter}/>
        </label>
        <label>Lunch
        <input type="checkbox" value="Lunch" onChange={updateMealsFilter}/>
        </label>
        <label>Dinner
        <input type="checkbox" value="Dinner"  onChange={updateMealsFilter}/>
        </label>
      </form>

      <form> Budget
        <label>Low
        <input type="checkbox" value="Low" onChange={updateBudgetFilter}/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium" onChange={updateBudgetFilter}/>
        </label>
        <label>High
        <input type="checkbox" value="High" onChange={updateBudgetFilter}/>
        </label>
      </form>

      <form> Portion size
        <label>Small
        <input type="checkbox" value="Small" onChange={updatePortionSizeFilter}/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium" onChange={updatePortionSizeFilter}/>
        </label>
        <label>Large
        <input type="checkbox" value="Large" onChange={updatePortionSizeFilter}/>
        </label>
      </form>

      <form> Target audience
        <label>Group
        <input type="checkbox" value="Group" onChange={updateTargetAudienceFilter}/>
        </label>
        <label>Date
        <input type="checkbox" value="Date" onChange={updateTargetAudienceFilter}/>
        </label>
        <label>Family
        <input type="checkbox" value="Family" onChange={updateTargetAudienceFilter}/>
        </label>
      </form>

      <form> Restaurant focus
        <label>Vegan
        <input type="checkbox" value="Vegan" onChange={updateRestaurantFocusFilter}/>
        </label>
        <label>Vegetarian
        <input type="checkbox" value="Vegetarian" onChange={updateRestaurantFocusFilter}/>
        </label>
        <label>Fish
        <input type="checkbox" value="Fish" onChange={updateRestaurantFocusFilter}/>
        </label>
        <label>Meat
        <input type="checkbox" value="Meat" onChange={updateRestaurantFocusFilter}/>
        </label>
      </form> 
     
     {/* // Fungerar ej */}
    <form>Dogfriendly
        <label>Yes
        <input type="radio" value="true" onChange={updateDogFriendlyFilter}/>
        </label>
        <label>No
        <input type="radio" value="false" onChange={updateDogFriendlyFilter}/>
        </label>
      </form>

      {/* // Fungerar ej */}  
      <form>Outdoor area
        <label>Yes
        <input type="radio" value="true" onChange={updateOutdoorAreaFilter}/>
        </label>
        <label>No
        <input type="radio" value="false" onChange={updateOutdoorAreaFilter}/>
        </label>
      </form>

      
      {filteredRestaurants.length === 0 ? (                        ///// Här ska det vara filteredRestaurants.length == 0
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