import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../store/auth/operations';
import css from '../../styles/register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <section>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Name</span>
          <input
            required
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Mail</span>

          <input
            required
            type="email"
            name="email"
            value={email}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="***@mail.com"
            title="***@mail.com"
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
            minLength="7"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </section>
  );
};
export default Register;
