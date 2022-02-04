import { NavLink } from 'react-router-dom';
import css from '../../styles/header.module.css';

const SiteNavigation = () => {
  return (
    <nav className={css['site-nav']}>
      <ul className={css['header-list']}>
        <li className={css['header-list-item']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css['link--active'] : css['link']
            }
          >
            Home
          </NavLink>
        </li>
        <li className={css['header-list-item']}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? css['link--active'] : css['link']
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export { SiteNavigation };
