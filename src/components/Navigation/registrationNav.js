import { NavLink } from 'react-router-dom';
import css from '../../styles/header.module.css';

const RegistrationNav = ({ openModal }) => {
  return (
    <ul className={css['header-list']}>
      <li className={css['header-list-item']}>
        <NavLink
          /* onClick={openModal} */ to="/register"
          className={({ isActive }) =>
            isActive ? css['link--active'] : css['link']
          }
        >
          Register{' '}
        </NavLink>
      </li>
      <li className={css['header-list-item']}>
        <NavLink
          /* onClick={openModal} */ to="/login"
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
