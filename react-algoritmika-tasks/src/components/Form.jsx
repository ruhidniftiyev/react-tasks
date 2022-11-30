import React, { useState } from 'react'

const Form = () => {
  return (
      <div className='form'>
          <Form className='user-form'>
              <p>Name</p>
              <input type="text" name="name" id="" />
              {/* <p>Surname</p>
              <input type="text" name="surname" id="" />
              <p>E-mail</p>
              <input type="email" name="email" id="" />
              <p>Phone</p>
              <input type="number" name="phone" id="" />
              <p>Comment</p>
              <input type="text" name="comment" id="" /> */}
              <button type="submit">Send</button>
          </Form>
    </div>
  )
}

export default Form