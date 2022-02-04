import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../store/auth/operations';
import css from '../../styles/register.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <section>
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Mail</span>

          <input
            type="email"
            name="email"
            value={email}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="***@mail.com"
            title="***@mail.com"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Password</span>

          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </section>
  );
};

export default Login;
