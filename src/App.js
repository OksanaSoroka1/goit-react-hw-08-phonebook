import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as operations from './store/auth/operations';

import { SiteHeader } from './components/SiteHeader';
import { LoaderSpinner } from './components/Loader';

const HomePage = lazy(() => import('./viewes/home'));
const ContactsPage = lazy(() => import('./viewes/contactsPage'));
const Register = lazy(() => import('./components/Register'));
const Login = lazy(() => import('./components/Login'));

const App = () => {
  const errorMessage = useSelector(state => state.error);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (errorMessage) {
      alert(`Something gone wrong: ${errorMessage}`);
    }
  }, [errorMessage]);

  return (
    <div className="App">
      <SiteHeader />
      <Suspense fallback={<LoaderSpinner />}>
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
