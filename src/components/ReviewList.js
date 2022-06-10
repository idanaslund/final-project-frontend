import React from 'react'
import { formatDistance } from 'date-fns'

const ReviewList = ({ loading, reviewList, handleLikesIncrease }) => {

  if (loading) {
    return <h3>Loading in progress...</h3>
  }

  return (

    <section>
      {reviewList.map(singleReview => (
        <article key={singleReview._id}>
          <p>{singleReview.review}</p>
          <div>
            <div>
              <button
                onClick={() => handleLikesIncrease(singleReview._id)}
              >
                <span className="heart" aria-label="heart-icon" role="img">
                                    &#10084;&#65039;
                </span>
              </button>
              <span>x {singleReview.like}</span>
            </div>
          </div>
          <p>
            {formatDistance(new Date(singleReview.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </p>
        </article>
      ))}
    </section>

  )

}

export default ReviewList