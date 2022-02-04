import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.user.isLogin);
  const username = useSelector(state => state.user.userData.name);
  return (
    <section>
      <h1 className="main-title">Phonebook</h1>
      {isLoggedIn ? (
        <p className={['auth-text']}>
          You are wellcome {username}. Now you can work with your{' '}
          <Link className={['nav-link']} to="/contacts">
            contacts
          </Link>
        </p>
      ) : (
        <p className={['auth-text']}>
          To be able to work with contacts, please{' '}
          <Link className={['nav-link']} to="/login">
            login
          </Link>{' '}
          or{' '}
          <Link className={['nav-link']} to="/register">
            register
          </Link>
          .
        </p>
      )}
    </section>
  );
};
export default HomePage;
