import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [sended, setSe] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setSurname('');
    setEmail('');
    setComment('');
    console.log(JSON.stringify({ name, surname, email, phone, comment }));
  };

  return (
    <div className="form">
      <form className="user-form" onSubmit={(e) => onSubmit(e)}>
        <p>Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id=""
        />
        <p>Surname</p>
        <input
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          name="surname"
          id=""
        />
        <p>E-mail</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="e-mail"
          name="email"
          id=""
        />
        <p>Phone</p>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="number"
          name="phone"
          id=""
        />
        <p>Comment</p>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          type="text"
          name="comment"
          id=""
        />
        <button onClick={() => setSe(true)} type="submit">
          Send
        </button>
      </form>
      {sended ? <p>Your comment is sended!</p> : ''}
    </div>
  );
};

export default Form;
