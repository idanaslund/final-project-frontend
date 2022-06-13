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
    const filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.type_of_food.filter(type => typeOfFoodFilter.includes(type)).length > 0)
    setFilteredRestaurants(filteredRestaurants) // Flytta längst ned  
    console.log(filteredRestaurants)
  }, [typeOfFoodFilter])           ///Lägg in alla useStates

  const updateFilter = (e) => {
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



  

  return (
    <StyledRestaurantList>
      {/* <form>
      <label>Type of food</label>
      <select name="Foods">
        <option value ="Nordic">Nordic</option>
        <option value ="Swedish">Swedish</option>
        <option value ="Italian">Italian</option>
        <option value ="Asian">Asian</option>
        <option value ="Spanish">Spanish</option>
        <option value ="American">American</option>
        <option value ="European">European</option>
        <option value ="Mediterranian">Mediterranian</option>
        <option value ="Japanese">Japanese</option>
        <option value ="Latin American">Latin American</option>
        <option value ="Middle Eastern">Middle Eastern</option>
      </select>
      </form> */}

      {/* <form>
      <label>Bugdet</label>
      <select name="Budget">
        <option value ="Low">Low</option>
        <option value ="Medium">Medium</option>
        <option value ="High">High</option>
      </select>
      </form>

      <form>
      <label>Portion size</label>
      <select name="Portion size">
        <option value ="Small">Small</option>
        <option value ="Medium">Medium</option>
        <option value ="Large">Large</option>
      </select>
      </form>

      <form>
      <label>Meals</label>
      <select name="Meals">
        <option value ="Breakfast">Breakfast</option>
        <option value ="Brunch">Brunch</option>
        <option value ="Lunch">Lunch</option>
        <option value ="Dinner">Dinner</option>
      </select>
      </form>

      <form>
      <label>Target audience</label>
      <select name="Target audience">
        <option value ="Group">Group</option>
        <option value ="Family">Family</option>
        <option value ="Date">Date</option>
      </select>
      </form>

      <form>
      <label>Restaurant focus</label>
      <select name="Restaurant focus">
        <option value ="Vegan">Vegan</option>
        <option value ="Vegetarian">Vegetarian</option>
        <option value ="Fish">Fish</option>
        <option value ="Meat">Meat</option>
      </select>
      </form>
      
      <form>Dogfriendly
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



      {/* Testade från https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
      
      <ul className="toppings-list">
        {restaurants.map(({ name, type_of_food }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={filter[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          )
        })}
        </ul> */}



      <form>Type of food
        <label>Nordic
        <input type="checkbox" value="Nordic" checked={typeOfFoodFilter.includes('Nordic')} onChange={updateFilter}/>
        </label>
        <label>Swedish
        <input type="checkbox" value="Swedish" checked={typeOfFoodFilter.includes('Swedish')} onChange={updateFilter}/>
        </label>
        <label>Italian
        <input type="checkbox" value="Italian" checked={typeOfFoodFilter.includes('Italian')} onChange={updateFilter}/>
        </label>
        <label>Asian
        <input type="checkbox" value="Asian" checked={typeOfFoodFilter.includes('Asian')} onChange={updateFilter}/>
        </label>
        <label>Spanish
        <input type="checkbox" value="Spanish" checked={typeOfFoodFilter.includes('Spanish')} onChange={updateFilter}/>
        </label>
        <label>American
        <input type="checkbox" value="American" checked={typeOfFoodFilter.includes('American')} onChange={updateFilter}/>
        </label>
        <label>European
        <input type="checkbox" value="European" checked={typeOfFoodFilter.includes('European')} onChange={updateFilter}/>
        </label>
        <label>Mediterranian
        <input type="checkbox" value="Mediterranian" checked={typeOfFoodFilter.includes('Mediterranian')} onChange={updateFilter}/>
        </label>
        <label>Japanese
        <input type="checkbox" value="Japanese" checked={typeOfFoodFilter.includes('Japanese')} onChange={updateFilter}/>
        </label>
        <label>Latin American
        <input type="checkbox" value="Latin American" checked={typeOfFoodFilter.includes('Latin American')} onChange={updateFilter}/>
        </label>
        <label>Middle Eastern
        <input type="checkbox" value="Middle Eastern" checked={typeOfFoodFilter.includes('Middle Eastern')} onChange={updateFilter}/>
        </label>
        
      </form>

      {/* <form>Budget
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
      </form>

      <form>Budget
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
        <label>Low
        <input type="checkbox" value="Low"/>
        </label>
        <label>Medium
        <input type="checkbox" value="Medium"/>
        </label>
        <label>High
        <input type="checkbox" value="High"/>
        </label>
      </form> */}
     

  


      
      {typeOfFoodFilter.length == 0 ? (                        ///// Här ska det vara filteredRestaurants.length == 0
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
        ): (
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