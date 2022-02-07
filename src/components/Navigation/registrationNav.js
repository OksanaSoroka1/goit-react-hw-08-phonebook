import { NavLink } from 'react-router-dom';
import css from '../../styles/header.module.css';

const RegistrationNav = () => {
  return (
    <ul className={css['header-list']}>
      <li className={css['header-list-item']}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? css['link--active'] : css['link']
          }
        >
          Register{' '}
        </NavLink>
      </li>
      <li className={css['header-list-item']}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? css['link--active'] : css['link']
          }
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
export { RegistrationNav };
