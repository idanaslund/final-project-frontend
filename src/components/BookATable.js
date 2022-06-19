// + Book a table as user with a form sent to email
// Create an email for dummy emails

import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';

import { BookATableContainer, BookATableInput, BookATableLogo,  BookATableTextArea, SubmitReservationButton } from 'theme/styles';


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
            alert('Your request has been sent!')
            console.log(alert)
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

        <BookATableContainer onSubmit={onSubmit}>
        <BookATableLogo src="https://i.postimg.cc/0QvNBQ3n/book-a-table.png" alt="book-a-table"/>
        <BookATableInput
          type='text'
          name='from_name'
          placeholder='Your name'
          value={toSend.from_name}
          onChange={handleChange}
        />
           <BookATableInput
          type='text'
          name='reply_to'
          placeholder='Email address'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <BookATableTextArea
          type='text'
          name='message'
          placeholder='I would love to make a reservation for 2 people this Saturday, 7PM. Is that possible?'
          value={toSend.message}
          onChange={handleChange}
        />
     
        <SubmitReservationButton type='submit'>Send request</SubmitReservationButton>
      </BookATableContainer>

      </>
    )

}

export default BookATable