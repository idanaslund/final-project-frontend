import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
import styled from 'styled-components'

import { API_URL } from 'utils/urls'

import user from 'reducers/user'

const FilteringPage = () => {
  const accessToken = useSelector((store) => store.user.accessToken)
  const [restaurants, setRestaurants] = useState ([])
  // const [resId, setResId] = useState ([])

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


  // const selected = () => {
  //   const category = questions.options[questions.selectedIndex].parentNode.label

  //    const value = questions.options[questions.selectedIndex].value
    
  
  //   currentOption = {
  //     category: category,
  //     value: value
  //   }
  //   console.log ('Question selected', currentOption)
  // }


//   const checkCategory = () => {
//   if (category === 'meals' || category === 'budget') {
//     if( json.response.meals.includes(value) || json.response.budget.includes(value)) {
//       filterCategories(true)
//   } else {
//     filterCategories(false)
//    }
//   } else if (category === 'type_of_food' || category === 'portion_size') {
//     if( json.response.type_of_food.includes(value) || json.response.portion_size.includes(value)) {
//       filterCategories(true)
//   } else {
//     filterCategories(false)
//    }
//   } else if (category === 'target_audience' || category === 'restaurant_focus') {
//     if( json.response.target_audience.includes(value) || json.response.restaurant_focus.includes(value)) {
//       filterCategories(true)
//   } else {
//     filterCategories(false)
//    }
//   }
// }




// const filterCategories = (keep) => {

//   const { category, value } = currentOption
//
//   if (category === 'meals') {
//     if (keep) {
//       alert(
//         `Yes, ${value} is correct! Keep all the people with that accessory.`
//       )
//       charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//     } else {
//       alert(
//         `No, ${value} was wrong! Remove all people with that accessory.`
//       )
//       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//     }
//   } else if (category === 'budget') {
//     if (keep) {
//       alert(
//         `Yes, ${value} is correct! Keep the ${value}.`
//       )
//       charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//     } else {
//       alert(
//         `No, ${value} was wrong! Remove the ${value}.`
//       )
//       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//     }
//   }else if (category === 'type_of_food') {
//       if (keep) {
//         alert(
//           `Yes, ${value} is correct! Keep all the people with that accessory.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//       } else {
//         alert(
//           `No, ${value} was wrong! Remove all people with that accessory.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//       }
//     } else if (category === 'portion_size') {
//       if (keep) {
//         alert(
//           `Yes, ${value} is correct! Keep the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//       } else {
//         alert(
//           `No, ${value} was wrong! Remove the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//       }
//     } else if (category === 'target_audience') {
//       if (keep) {
//         alert(
//           `Yes, ${value} is correct! Keep the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//       } else {
//         alert(
//           `No, ${value} was wrong! Remove the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//       }
//     } else if (category === 'restaurant_focus') {
//       if (keep) {
//         alert(
//           `Yes, ${value} is correct! Keep the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//       } else {
//         alert(
//           `No, ${value} was wrong! Remove the ${value}.`
//         )
//         charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//       }
//   }


  return (
    <StyledRestaurantList>
      <form>
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
      </form>

      <form>
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
      </form>
     

  


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