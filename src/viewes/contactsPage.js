import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import '../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
  const isLoggedIn = useSelector(state => state.user.isLogin);
  return (
    <section>
      <h1 className="main-title">Phonebook</h1>
      {isLoggedIn ? (
        <>
          <Form />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactsList />
        </>
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

export { ContactsPage };
