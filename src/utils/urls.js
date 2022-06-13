export const BASE_URL = 'http://localhost:8080'

export const RES_ID = (resId) => `http://localhost:8080/restaurants/${resId}`


export const SIGNUP = 'signup'

export const EDIT_USER = (id) => `http://localhost:8080/profile/${id}`

export const API_URL = (slug) => `${BASE_URL}/${slug}`

export const REVIEWS = 'reviews/'


export const API_LIKES_URL = (singleReviewId) => `http://localhost:8080/reviews/${singleReviewId}/like`



// export const API_LIKES_URL = (singleReviewId) => `https://restaurants-backend-database.herokuapp.com/reviews/${singleReviewId}/like`

// export const EDIT_USER = (id) => `https://restaurants-backend-database.herokuapp.com/profile/${id}`

// export const RES_ID = (resId) => `https://restaurants-backend-database.herokuapp.com/restaurants/id/${resId}`

// export const BASE_URL = 'https://restaurants-backend-database.herokuapp.com'

// export const LOGIN = 'profile'