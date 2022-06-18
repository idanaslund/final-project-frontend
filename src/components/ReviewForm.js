import React from 'react'

const ReviewForm = ({ newReview, onNewReviewChange, onFormSubmit, counter, restaurant }) => {

  return (

    <form onSubmit={onFormSubmit}>
      <div>
        <p>{restaurant}</p>
        <label htmlFor='newReview'>
          How was your experience at this restaurant?
        </label>
        <br /> 
        <br />
        <textarea 
          className={
            counter < 6 || counter > 140 ? 'diabled-textarea' : 'textarea'
          }
          rows='5'
          columns='150'
          id='newReview'
          type='text'
          value={newReview}
          onChange={onNewReviewChange}
          placeholder='Please write your review.'
        />
        <p>
          {140 - counter} / 140 characters left
        </p>
        <div>
    
          <button
          type='submit'
          disabled={newReview.length < 6 || newReview.length > 140}
          >Submit review
          </button>
        </div>
      </div>
    </form>

  )

}

export default ReviewForm