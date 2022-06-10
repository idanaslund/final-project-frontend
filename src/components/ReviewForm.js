import React from 'react'

const ReviewForm = ({ newReview, onNewReviewChange, onFormSubmit, counter }) => {

  return (

    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor='newReview'>
          How was your experience at this restaurant?
        </label>
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
          >
          </button>
        </div>
      </div>
    </form>

  )

}

export default ReviewForm