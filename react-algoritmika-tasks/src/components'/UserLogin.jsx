import React, { useState } from 'react';
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocus, setFocus] = useState(false);

  const emailArr = email.split('.');

  return (
    <div className="userLogin">
      <form className="user-form">
        <label>
          E-mail:
          {emailArr[1] && emailArr[1] != 'ru' && <p>Yalnız .ru domenlərinə icazə verilir.</p>}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id=""
          />
        </label>
        <label>
          Password:
          {isFocus && password.length < 8 && <p>Ən azı 8 simvol</p>}
          <input
            onFocus={() => setFocus(true)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
          />
        </label>
        <button
          type="submit"
          className={password.length > 8 && emailArr[1] === 'ru' ? 'enable' : 'disable'}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
