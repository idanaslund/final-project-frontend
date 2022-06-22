import React, { useEffect, useState } from 'react'      
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch, batch } from 'react-redux'
import { FilterContainer, RestaurantCard, EachFilterContainer, EachCheckBox, ToggleButton, CategoryContainer, CategoryGroup } from '../theme/styles'
import { Paragraph, Label, SecondHeader, CardWrapper, MarginSection  } from '../theme/reusable'
import user from 'reducers/user'

import { Checkbox, FormControlLabel, Radio } from '@material-ui/core'
import Arrow from '../assets/down-arrow.png'

import { API_URL } from 'utils/urls'

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
  const [filterActive, setFilterActive] = useState(false)
  const [typeOfFoodVisible, setTypeOfFoodVisible] = useState(false)
  const [mealsVisible, setMealsVisible] = useState(false)
  const [budgetVisible, setBudgetVisible] = useState(false)
  const [portionSizeVisible, setPortionSizeVisible] = useState(false)
  const [targetAudienceVisible, setTargetAudienceVisible] = useState(false)
  const [restaurantFocusVisible, setRestaurantFocusVisible] = useState(false)
  const [dogFriendlyVisible, setDogFriendlyVisible] = useState(false)
  const [outdoorAreaVisible, setOutdoorAreaVisible] = useState(false)
  
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
    setFilterActive(false)
    let filteredRestaurants = restaurants

    // Type of Food
    if (typeOfFoodFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        restaurant.type_of_food.filter(type => typeOfFoodFilter.includes(type)).length > 0)

        setFilterActive(true)
    } 
    // Meals
    if (mealsFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant => 
        restaurant.meals.filter(type => mealsFilter.includes(type)).length > 0)

        setFilterActive(true)
    }
    // Budget
    if (budgetFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.budget.filter(type => budgetFilter.includes(type)).length > 0)
        
        setFilterActive(true)
    }
    // Portion size
    if (portionSizeFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.portion_size.filter(type => portionSizeFilter.includes(type)).length > 0)
        
        setFilterActive(true)
    }
    // Target audience
    if (targetAudienceFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.target_audience.filter(type => targetAudienceFilter.includes(type)).length > 0)
        
        setFilterActive(true)
    }
    // Restaurant focus
    if (restaurantFocusFilter.length > 0) {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.restaurant_focus.filter(type => restaurantFocusFilter.includes(type)).length > 0)
        
        setFilterActive(true)
    }
    // Dog friendly
    if (dogFriendlyFilter !== 'no_pref') {
        filteredRestaurants = filteredRestaurants.filter(restaurant =>
          restaurant.dogfriendly === (dogFriendlyFilter === 'yes' ? true : false))

        setFilterActive(true)
    }
    // Outdoor area
    if (outdoorAreaFilter !== 'no_pref') {
      filteredRestaurants = filteredRestaurants.filter(restaurant =>
        restaurant.outdoor_area === (outdoorAreaFilter === 'yes' ? true : false))
        
        setFilterActive(true)
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
  
    <MarginSection>
      <FilterContainer> 
        <Paragraph>Hungry for something new and unexpected, maybe from an eatery you haven't tried yet?</Paragraph>
        <Paragraph>foodiefinder helps you find your next favourite restaurant in Stockholm! </Paragraph>
        <CategoryGroup>
          <form>
            <CategoryContainer>
              <SecondHeader>Type of food</SecondHeader>
              <ToggleButton
              type="button"
              onClick={() => setTypeOfFoodVisible(!typeOfFoodVisible)}
              >
                {typeOfFoodVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
              </ToggleButton>
            </CategoryContainer>

            {typeOfFoodVisible && (
              <>
                <EachFilterContainer>
            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Nordic")} id="Nordic" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Nordic" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Nordic
                </Label>
              }
            />
            </EachCheckBox>
        
            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Swedish")} id="Swedish" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Swedish" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Swedish
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Italian")} id="Italian" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Italian" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Italian
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Asian")} id="Asian" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Asian" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Asian
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Spanish")} id="Spanish" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Spanish" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Spanish
                </Label>
              }
            />
            </EachCheckBox>
            
            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("American")} id="American" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="American" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  American
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("European")} id="European" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="European" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  European
                </Label>
              }
            />
            </EachCheckBox>
          
            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Mediterranian")} id="Mediterranian" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Mediterranian" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Mediterranian
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Japanese")} id="Japanese" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Japanese" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Japanese
                </Label>
              }
            />
            </EachCheckBox>

            <EachCheckBox>
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Latin American")} id="Latin American" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Latin American" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Latin American
                </Label>
              }
            />
            </EachCheckBox>
              
            <EachCheckBox> 
            <FormControlLabel
              control={
                <Checkbox checked={typeOfFoodFilter.includes("Middle Eastern")} id="Middle Eastern" type="checkbox" style={{
                  color: '#da918b'
                }} 
                value="Middle Eastern" onChange={updateTypeOfFoodFilter}/>
              }
              label={
                <Label>
                  Middle Eastern
                </Label>
              }
            />
            </EachCheckBox>

        </EachFilterContainer>
              </>
            )}
              
          </form>

          <form>
          <CategoryContainer>
            <SecondHeader>Meals</SecondHeader>
            <ToggleButton
            type="button"
            onClick={() => setMealsVisible(!mealsVisible)}
            >
              {mealsVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
            </ToggleButton>
          </CategoryContainer>

          {mealsVisible && (
            <>
              <EachFilterContainer>
                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={mealsFilter.includes("Breakfast")} id="Breakfast" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Breakfast" onChange={updateMealsFilter}/>           
                    }
                    label={
                      <Label>
                        Breakfast
                      </Label>
                    }
                  />
                </EachCheckBox>

                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={mealsFilter.includes("Brunch")} id="Brunch" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Brunch" onChange={updateMealsFilter}/>           
                    }
                    label={
                      <Label>
                        Brunch
                      </Label>
                    }
                  />
                </EachCheckBox>

                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={mealsFilter.includes("Lunch")} id="Lunch" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Lunch" onChange={updateMealsFilter}/>           
                    }
                    label={
                      <Label>
                        Lunch
                      </Label>
                    }
                  />
                </EachCheckBox>
                
                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={mealsFilter.includes("Dinner")} id="Dinner" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Dinner" onChange={updateMealsFilter}/>           
                    }
                    label={
                      <Label>
                        Dinner
                      </Label>
                    }
                  />
                </EachCheckBox>
              </EachFilterContainer>
            </>
          )}
          </form>

          <form>  
            <CategoryContainer>
            <SecondHeader>Budget</SecondHeader>
              <ToggleButton
              type="button"
              onClick={() => setBudgetVisible(!budgetVisible)}
              >
                {budgetVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
              </ToggleButton>
            </CategoryContainer>
            
            {budgetVisible && (
              <EachFilterContainer>
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={budgetFilter.includes("Low")} id="Low" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Low" onChange={updateBudgetFilter}/>           
                  }
                  label={
                    <Label>
                      Low
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={budgetFilter.includes("Medium")} id="Medium" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Medium" onChange={updateBudgetFilter}/>           
                  }
                  label={
                    <Label>
                      Medium
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={budgetFilter.includes("High")} id="High" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="High" onChange={updateBudgetFilter}/>           
                  }
                  label={
                    <Label>
                      High
                    </Label>
                  }
                />
              </EachCheckBox>
              </EachFilterContainer>
            )}

            
          </form>

          <form> 
            <CategoryContainer>
              <SecondHeader>Portion size</SecondHeader>
                <ToggleButton
                type="button"
                onClick={() => setPortionSizeVisible(!portionSizeVisible)}
                >
                  {portionSizeVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
                </ToggleButton>
            </CategoryContainer> 

              {portionSizeVisible && (
                <EachFilterContainer>
                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={portionSizeFilter.includes("Small")} id="Small" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Small" onChange={updatePortionSizeFilter}/>           
                    }
                    label={
                      <Label>
                        Small
                      </Label>
                    }
                  />
                </EachCheckBox>
      
                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={portionSizeFilter.includes("Medium")} id="Medium" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Medium" onChange={updatePortionSizeFilter}/>           
                    }
                    label={
                      <Label>
                        Medium
                      </Label>
                    }
                  />
                </EachCheckBox>
      
                <EachCheckBox>
                <FormControlLabel
                    control={
                      <Checkbox checked={portionSizeFilter.includes("Large")} id="Large" type="checkbox" style={{
                        color: '#da918b'
                      }} 
                      value="Large" onChange={updatePortionSizeFilter}/>           
                    }
                    label={
                      <Label>
                        Large
                      </Label>
                    }
                  />
                </EachCheckBox>
      
                </EachFilterContainer>
              )}
          </form>

          <form> 
            <CategoryContainer>
              <SecondHeader>Target audience</SecondHeader>
                  <ToggleButton
                  type="button"
                  onClick={() => setTargetAudienceVisible(!targetAudienceVisible)}
                  >
                    {targetAudienceVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
                  </ToggleButton>
              </CategoryContainer>

            {targetAudienceVisible && (
              <EachFilterContainer>
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={targetAudienceFilter.includes("Group")} id="Group" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Group" onChange={updateTargetAudienceFilter}/>           
                  }
                  label={
                    <Label>
                      Group
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={targetAudienceFilter.includes("Date")} id="Date" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Date" onChange={updateTargetAudienceFilter}/>           
                  }
                  label={
                    <Label>
                      Date
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={targetAudienceFilter.includes("Family")} id="Family" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Family" onChange={updateTargetAudienceFilter}/>           
                  }
                  label={
                    <Label>
                      Family
                    </Label>
                  }
                />
              </EachCheckBox>
              </EachFilterContainer>
            )}
            
          </form>

          <form> 
            <CategoryContainer>
              <SecondHeader>Restaurant focus</SecondHeader>
                    <ToggleButton
                    type="button"
                    onClick={() => setRestaurantFocusVisible(!restaurantFocusVisible)}
                    >
                      {restaurantFocusVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
                    </ToggleButton>
              </CategoryContainer>
            
            {restaurantFocusVisible && (
              <EachFilterContainer>
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={restaurantFocusFilter.includes("Vegan")} id="Vegan" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Vegan" onChange={updateRestaurantFocusFilter}/>           
                  }
                  label={
                    <Label>
                      Vegan
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={restaurantFocusFilter.includes("Vegetarian")} id="Vegetarian" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Vegetarian" onChange={updateRestaurantFocusFilter}/>           
                  }
                  label={
                    <Label>
                      Vegetarian
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={restaurantFocusFilter.includes("Fish")} id="Fish" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Fish" onChange={updateRestaurantFocusFilter}/>           
                  }
                  label={
                    <Label>
                      Fish
                    </Label>
                  }
                />
              </EachCheckBox>
    
              <EachCheckBox>
              <FormControlLabel
                  control={
                    <Checkbox checked={restaurantFocusFilter.includes("Meat")} id="Meat" type="checkbox" style={{
                      color: '#da918b'
                    }} 
                    value="Meat" onChange={updateRestaurantFocusFilter}/>           
                  }
                  label={
                    <Label>
                      Meat
                    </Label>
                  }
                />
              </EachCheckBox>
    
            </EachFilterContainer>
            )}
          </form> 
        
          <form>
            <CategoryContainer>
              <SecondHeader> Dog friendly</SecondHeader>
                    <ToggleButton
                    type="button"
                    onClick={() => setDogFriendlyVisible(!dogFriendlyVisible)}
                    >
                      {dogFriendlyVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
                    </ToggleButton>
            </CategoryContainer>
            
            {dogFriendlyVisible && (
              <EachFilterContainer>
              <EachCheckBox>
                <FormControlLabel
                      control={
                      <Radio
                      checked={(dogFriendlyFilter === 'yes') && (dogFriendlyFilter.includes("yes"))}
                      onChange={updateDogFriendlyFilter}
                      value="yes"
                      style={{
                        color: '#da918b'
                      }} 
                    />
                  }
                    label={
                      <Label>
                        Dogs
                      </Label>
                    }
                />
              </EachCheckBox>
    
              <EachCheckBox>
                <FormControlLabel
                    control={
                    <Radio
                    checked={(dogFriendlyFilter === 'no') && (dogFriendlyFilter.includes("no"))}
                    onChange={updateDogFriendlyFilter}
                    value="no"
                    style={{
                    color: '#da918b'
                    }} 
                  />
                    }
                    label={
                      <Label>
                        No dogs
                      </Label>
                    }
                />
              </EachCheckBox>
    
              <EachCheckBox>
                <FormControlLabel
                    control={
                    <Radio
                    checked={(dogFriendlyFilter === 'no_pref') && (dogFriendlyFilter.includes("no_pref"))}
                    onChange={updateDogFriendlyFilter}
                    value="no_pref"
                    style={{
                    color: '#da918b'
                    }} 
                    />
                  }
                    label={
                      <Label>
                        No preference
                      </Label>
                    }
                />
              </EachCheckBox>
              </EachFilterContainer>
            )}
          </form>

          <form>
            <CategoryContainer>
              <SecondHeader>Outdoor area</SecondHeader>
                    <ToggleButton
                    type="button"
                    onClick={() => setOutdoorAreaVisible(!outdoorAreaVisible)}
                    >
                      {outdoorAreaVisible ? (<img src={Arrow} alt='arrow' className='arrowUp' />) : (<img src={Arrow} alt='arrow' className='arrowDown' />)}
                    </ToggleButton>
            </CategoryContainer>

            {outdoorAreaVisible && (
              <EachFilterContainer>
              <EachCheckBox>
                <FormControlLabel
                    control={
                    <Radio
                    checked={(outdoorAreaFilter === 'yes') && (outdoorAreaFilter.includes("yes"))}
                    onChange={updateOutdoorAreaFilter}
                    value="yes"
                    style={{
                    color: '#da918b'
                    }} 
                    />
                  }
                    label={
                      <Label>
                        Yes
                      </Label>
                    }
                />
              </EachCheckBox>
    
              <EachCheckBox>
                <FormControlLabel
                    control={
                    <Radio
                    checked={(outdoorAreaFilter === 'no') && (outdoorAreaFilter.includes("no"))}
                    onChange={updateOutdoorAreaFilter}
                    value="no"
                    style={{
                    color: '#da918b'
                    }} 
                    />
                  }
                    label={
                      <Label>
                        No
                      </Label>
                    }
                />
              </EachCheckBox>
    
              <EachCheckBox>
                <FormControlLabel
                    control={
                    <Radio
                    checked={(outdoorAreaFilter === 'no_pref') && (outdoorAreaFilter.includes("no_pref"))}
                    onChange={updateOutdoorAreaFilter}
                    value="no_pref"
                    style={{
                    color: '#da918b'
                    }} 
                    />
                  }
                    label={
                      <Label>
                        No preference
                      </Label>
                    }
                />
              </EachCheckBox> 
              </EachFilterContainer> 
            )}
            
          </form>
        </CategoryGroup>
      </FilterContainer>

      
      {!filterActive ? ( 
        <CardWrapper className='restaurantListPage'>
        {restaurants.map(restaurant => (
          <Link className='link' key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
              <RestaurantCard className='restaurantCard'>
               <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
               <div>
                  <h2>{restaurant.name}</h2>
               </div>
               </RestaurantCard>
            </Link>

        ))}
        </CardWrapper>
        ) : (filterActive && filteredRestaurants.length === 0) ? (
          <CardWrapper>
            <p>Sorry, we couldn't find any restaurants...</p>
          </CardWrapper>
        ) : (
          <CardWrapper className='restaurantListPage'>
          {filteredRestaurants.map(restaurant => (
            <Link className='link' key={restaurant.id} state={{restaurantId: restaurant.id}} to={`/restaurants/${restaurant.id}`}>
                <RestaurantCard className='restaurantCard'>
                 <img src={restaurant.image_URL} alt={restaurant.name} className='restaurantImage' />
                 <div>
                    <h2>{restaurant.name}</h2>
                 </div>
                 </RestaurantCard>
              </Link>
          ))}
          </CardWrapper>
          
        )}

    </MarginSection>
  )
}

export default FilteringPage

