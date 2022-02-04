/* import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from '../../styles/modal.module.css';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Register } from '../Register';
import { Login } from '../Login';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }
  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>,
    modalRoot,
  );
};

export { Modal };
 */
