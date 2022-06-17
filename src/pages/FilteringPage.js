import React, { useEffect, useState } from 'react'      
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
import { FilterContainer, ReastaurantCard } from '../theme/styles'
import { CardWrapper } from '../theme/reusable'

import { API_URL } from 'utils/urls'

import { SecondHeader } from '../theme/styles'
import { Paragraph } from '../theme/reusable'

import user from 'reducers/user'

const FilteringPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const [restaurants, setRestaurants] = useState ([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]) 
  const [typeOfFoodFilter, setTypeOfFoodFilter] = useState([]) 
  const [mealsFilter, setMealsFilter] = useState([])         
  const [budgetFilter, setBudgetFilter] = useState([])
  const [portionSizeFilter, setPortionSizeFilter] = useState([])
  const [targetAudienceFilter, setTargetAudienceFilter] = useState([])
  const [restaurantFocusFilter, setRestaurantFocusFilter] = useState([])
  const [dogFriendlyFilter, setDogFriendlyFilter] = useState('no_pref')
  const [outdoorAreaFilter, setOutdoorAreaFilter] = useState('no_pref')

  
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
              dispatch(user.actions.setErrors(null))
            })
          } else {
            dispatch(user.actions.setErrors(json.response))
          }
        })   
    }
  }, [accessToken, dispatch])

  useEffect(() => { 
    let filteredRestaurants = restaurants
    // Type of Food
    if (typeOfFoodFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        restaurant.type_of_food.filter(type => typeOfFoodFilter.includes(type)).length > 0)

        console.log(filteredRestaurants)
    } 
    // Meals
    if (mealsFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        restaurant.meals.filter(type => mealsFilter.includes(type)).length > 0)
        
        console.log(filteredRestaurants)
    }
    // Budget
    if (budgetFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.budget.filter(type => budgetFilter.includes(type)).length > 0)
        
        console.log(filteredRestaurants)
    }
    // Portion size
    if (portionSizeFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.portion_size.filter(type => portionSizeFilter.includes(type)).length > 0)
        
        console.log(filteredRestaurants)
    }
    // Target audience
    if (targetAudienceFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.target_audience.filter(type => targetAudienceFilter.includes(type)).length > 0)
        
        console.log(filteredRestaurants)
    }
    // Restaurant focus
    if (restaurantFocusFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.restaurant_focus.filter(type => restaurantFocusFilter.includes(type)).length > 0)
        
        console.log(filteredRestaurants)
    }
    // Dog friendly
    if (dogFriendlyFilter !== 'no_pref') {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.dogfriendly === (dogFriendlyFilter === 'yes' ? true : false))

        console.log(filteredRestaurants)
    }
    // Outdoor area
    if (outdoorAreaFilter !== 'no_pref') {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.outdoor_area === (outdoorAreaFilter === 'yes' ? true : false))
        
        console.log(filteredRestaurants)
    }
    setFilteredRestaurants(filteredRestaurants)
  }, [restaurants, typeOfFoodFilter, mealsFilter, budgetFilter, portionSizeFilter, targetAudienceFilter, restaurantFocusFilter, dogFriendlyFilter, outdoorAreaFilter])           ///Lägg in alla useStates (Här ligger alla våra filter som är beroende av filtreringen)

  // Type of Food
  const updateTypeOfFoodFilter = (e) => {
    const { value, checked } = e.target

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
  // Dog friendly 
  const updateDogFriendlyFilter = (e) => {
    const { value } = e.target
    setDogFriendlyFilter(value)
  }
  // Outdoor area 
  const updateOutdoorAreaFilter = (e) => {
    const { value } = e.target
    setOutdoorAreaFilter(value)
  }

  return (
  
    <section>

      <FilterContainer>
        <form>
          <Paragraph>Hungry for something new and unexpected, maybe from an eatery you haven't tried yet?</Paragraph>
          <Paragraph>foodiefinder helps you find your next favourite restaurant in Stockholm! </Paragraph>
          <SecondHeader>Type of food</SecondHeader>
          <label>
          <input type="checkbox" value="Nordic" onChange={updateTypeOfFoodFilter}/> 
          Nordic
          </label>
          <label>
          <input type="checkbox" value="Swedish" onChange={updateTypeOfFoodFilter}/>
          Swedish
          </label>
          <label>
          <input type="checkbox" value="Italian" onChange={updateTypeOfFoodFilter}/>
          Italian
          </label>
          <label>
          <input type="checkbox" value="Asian" onChange={updateTypeOfFoodFilter}/>
          Asian
          </label>
          <label>
          <input type="checkbox" value="Spanish" onChange={updateTypeOfFoodFilter}/>
          Spanish
          </label>
          <label>
          <input type="checkbox" value="American" onChange={updateTypeOfFoodFilter}/>
          American
          </label>
          <label>
          <input type="checkbox" value="European" onChange={updateTypeOfFoodFilter}/>
          European
          </label>
          <label>
          <input type="checkbox" value="Mediterranian" onChange={updateTypeOfFoodFilter}/>
          Mediterranian
          </label>
          <label>
          <input type="checkbox" value="Japanese" onChange={updateTypeOfFoodFilter}/>
          Japanese
          </label>
          <label>
          <input type="checkbox" value="Latin American" onChange={updateTypeOfFoodFilter}/>
          Latin American
          </label>
          <label>
          <input type="checkbox" value="Middle Eastern" onChange={updateTypeOfFoodFilter}/>
          Middle Eastern
          </label>
          
        </form>


        <form>
        <SecondHeader>Meals</SecondHeader>
          <label>
          <input type="checkbox" value="Breakfast" onChange={updateMealsFilter}/>
          Breakfast
          </label>
          <label>
          <input type="checkbox" value="Brunch" onChange={updateMealsFilter}/>
          Brunch
          </label>
          <label>
          <input type="checkbox" value="Lunch" onChange={updateMealsFilter}/>
          Lunch
          </label>
          <label>
          <input type="checkbox" value="Dinner"  onChange={updateMealsFilter}/>
          Dinner
          </label>
        </form>

        <form>  <SecondHeader>Budget</SecondHeader>
          <label>
          <input type="checkbox" value="Low" onChange={updateBudgetFilter}/>
          Low
          </label>
          <label>
          <input type="checkbox" value="Medium" onChange={updateBudgetFilter}/>
          Medium
          </label>
          <label>
          <input type="checkbox" value="High" onChange={updateBudgetFilter}/>
          High
          </label>
        </form>

        <form>  <SecondHeader>Portion size</SecondHeader>
          <label>
          <input type="checkbox" value="Small" onChange={updatePortionSizeFilter}/>
          Small
          </label>
          <label>
          <input type="checkbox" value="Medium" onChange={updatePortionSizeFilter}/>
          Medium
          </label>
          <label>
          <input type="checkbox" value="Large" onChange={updatePortionSizeFilter}/>
          Large
          </label>
        </form>

        <form> <SecondHeader>Target audience</SecondHeader>
          <label>
          <input type="checkbox" value="Group" onChange={updateTargetAudienceFilter}/>
          Group
          </label>
          <label>
          <input type="checkbox" value="Date" onChange={updateTargetAudienceFilter}/>
          Date
          </label>
          <label>
          <input type="checkbox" value="Family" onChange={updateTargetAudienceFilter}/>Family
          </label>
        </form>

        <form> <SecondHeader>Restaurant focus</SecondHeader>
          <label>
          <input type="checkbox" value="Vegan" onChange={updateRestaurantFocusFilter}/>Vegan
          </label>
          <label>
          <input type="checkbox" value="Vegetarian" onChange={updateRestaurantFocusFilter}/>
          Vegetarian
          </label>
          <label>
          <input type="checkbox" value="Fish" onChange={updateRestaurantFocusFilter}/>
          Fish
          </label>
          <label>
          <input type="checkbox" value="Meat" onChange={updateRestaurantFocusFilter}/>
          Meat
          </label>
        </form> 
      
      <form><SecondHeader> Dog friendly</SecondHeader>
          <label>
          <input type="radio" checked={dogFriendlyFilter==='yes'} value="yes" onChange={updateDogFriendlyFilter}/>
          Dogs
          </label>
          <label>
          <input type="radio" checked={dogFriendlyFilter==='no'} value="no" onChange={updateDogFriendlyFilter}/>
          No dogs
          </label>
          <label>
          <input type="radio" checked={dogFriendlyFilter==='no_pref'} value="no_pref" onChange={updateDogFriendlyFilter}/>
          No preference
          </label>
        </form>

        <form><SecondHeader>Outdoor area</SecondHeader>
          <label>
          <input type="radio" checked={outdoorAreaFilter==='yes'} value="yes" onChange={updateOutdoorAreaFilter}/>
          Yes
          </label>
          <label>
          <input type="radio" checked={outdoorAreaFilter==='no'} value="no" onChange={updateOutdoorAreaFilter}/>
          No
          </label>
          <label>
          <input type="radio" checked={outdoorAreaFilter==='no_pref'} value="no_pref" onChange={updateOutdoorAreaFilter}/>
          No preference
          </label>
        </form>
      </FilterContainer>

      
      {filteredRestaurants.length == 0 ? ( 
        <CardWrapper className='restaurantListPage'>
        {restaurants.map(restaurant => (
          <Link className='link' key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
              <ReastaurantCard className='restaurantCard'>
               <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
               <div>
                  <h2>{restaurant.name}</h2>
               </div>
               </ReastaurantCard>
            </Link>

        ))}
        </CardWrapper>
        ) : (
          <CardWrapper className='restaurantListPage'>
          {filteredRestaurants.map(restaurant => (
            <Link className='link' key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
                <ReastaurantCard className='restaurantCard'>
                 <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
                 <div>
                    <h2>{restaurant.name}</h2>
                 </div>
                 </ReastaurantCard>
              </Link>
          ))}
          </CardWrapper>
          
        )}

    </section>
  )
}

export default FilteringPage

