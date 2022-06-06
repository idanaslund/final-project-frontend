export const BASE_URL = 'https://restaurants-backend-database.herokuapp.com'
export const RES_ID = (name) => `https://restaurants-backend-database.herokuapp.com/restaurants/name/${name}`

export const SIGNUP = 'signup'

// export const LOGIN = 'profile'

export const EDIT_USER = (id) => `https://restaurants-backend-database.herokuapp.com/profile/${id}`

export const API_URL = (slug) => `${BASE_URL}/${slug}`
