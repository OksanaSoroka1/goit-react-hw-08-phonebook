import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

/* import { ContactsPage } from './viewes/contactsPage'; */
import { SiteHeader } from './components/SiteHeader';
/* import { HomePage } from './viewes/home'; */

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Modal } from './components/Modals/modal';

/* import { Register } from './components/Register';
import { Login } from './components/Login'; */
import { LoaderSpinner } from './components/Loader';

const HomePage = lazy(() => import('./viewes/home'));
const ContactsPage = lazy(() => import('./viewes/contactsPage'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));

const App = () => {
  const errorMessage = useSelector(state => state.error);
  useEffect(() => {
    if (errorMessage) {
      alert(`Something gone wrong: ${errorMessage}`);
    }
  }, [errorMessage]);

  return (
    <div className="App">
      <SiteHeader />
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
