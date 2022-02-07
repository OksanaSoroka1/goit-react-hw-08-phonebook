import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import '../App.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ContactsPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLogin);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <section>
      <h1 className="main-title">Phonebook</h1>
      {isLoggedIn && (
        <>
          <Form />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
    </section>
  );
};

export default ContactsPage;
