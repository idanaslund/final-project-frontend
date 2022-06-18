// + Book a table as user with a form sent to email
// Create an email for dummy emails

import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

import { BookATableContainer, BookATableInput, SubmitReviewButton } from 'theme/styles';


const BookATable = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_ra09fwn',
          'template_5g3welq',
          toSend,
          'Cc3Rf3fZNFmn7Nkj6'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
      return (
<>
        <img src="/final-project-frontend/src/assets/book-a-table.png" alt="book-a-table"/>
        <BookATableContainer onSubmit={onSubmit}>
   
        <BookATableInput
          type='text'
          name='from_name'
          placeholder='Your name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <BookATableInput
          type='text'
          name='message'
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
        />
        <BookATableInput
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <SubmitReviewButton type='submit'>Submit</SubmitReviewButton>
      </BookATableContainer>

      </>
    )

}

export default BookATable