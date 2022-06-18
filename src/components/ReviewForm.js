import React from 'react'
import { PostReviewBox, TextLabel, ReviewTextArea, Characters } from 'theme/styles'

const ReviewForm = ({ newReview, onNewReviewChange, onFormSubmit, counter }) => {

  return (

    <form onSubmit={onFormSubmit}>
      <PostReviewBox>
        <TextLabel htmlFor='newReview'>
          How was your experience at this restaurant?
        </TextLabel>
        <br /> 
        <br />
        <ReviewTextArea 
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
        <Characters>
          {140 - counter} / 140 characters left
        </Characters>
        <div>
    
          <button
          type='submit'
          disabled={newReview.length < 6 || newReview.length > 140}
          >Submit review
          </button>
        </div>
      </PostReviewBox>
    </form>

  )

}

export default ReviewForm