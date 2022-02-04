import { NavLink } from 'react-router-dom';
import { RegistrationNav } from '../Navigation';
import { SiteNavigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import css from '../../styles/header.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SiteHeader = ({ openModal }) => {
  const isLoggedIn = useSelector(state => state.user.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  return (
    <header className={css.header}>
      <SiteNavigation />
      {isLoggedIn ? <UserMenu /> : <RegistrationNav openModal={openModal} />}
    </header>
  );
};
export { SiteHeader };
