import css from '../../styles/header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../store/auth/operations';

const UserMenu = () => {
  const userMail = useSelector(state => state.user.userData.email);
  const dispatch = useDispatch();
  function onLogOutClick() {
    dispatch(operations.logout());
  }
  return (
    <ul className={css['header-list']}>
      <li className={css['header-list-item']}>
        <p>{userMail}</p>
      </li>
      <li className={css['header-list-item']}>
        <button className={css.button} type="button" onClick={onLogOutClick}>
          Log Out
        </button>
      </li>
    </ul>
  );
};
export { UserMenu };
