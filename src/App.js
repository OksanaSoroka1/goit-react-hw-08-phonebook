import './App.css';
import { Routes, Route } from 'react-router-dom';

import { ContactsPage } from './viewes/contactsPage';
import { SiteHeader } from './components/SiteHeader';
import { HomePage } from './viewes/home';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from './components/Modals/modal';

import { Register } from './components/Register';
import { Login } from './components/Login';

const App = () => {
  /*  const [openModal, setOpenModal] = useState(false); */
  const errorMessage = useSelector(state => state.error);
  /*  const navigate = useNavigate(); */
  useEffect(() => {
    if (errorMessage) {
      alert(`Something gone wrong: ${errorMessage.message}`);
    }
  }, [errorMessage]);

  /* useEffect(() => { 
    if (openModal === false) { 
      navigate(-1);
    }
  },[openModal]) */

  /*  function toggleModal() {
    setOpenModal(!openModal);
  } */

  return (
    <div className="App">
      <SiteHeader /* openModal={toggleModal} */ />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/*  {openModal && <Modal onClose={toggleModal}/> } */}
    </div>
  );
};

export default App;
