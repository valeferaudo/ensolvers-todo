import styles from './header.module.css';
// import { logout } from 'redux/Auth/thunks';
// import { useDispatch } from 'react-redux';

function Header(props) {
  // const history = useHistory();
  //   const dispatch = useDispatch();

  const handleLogOut = async () => {
    // await dispatch(logout());
    // history.push('/');
  };
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
          <span className={styles.title}>TO DO</span>
        </div>
        <button className={styles.btnLogout} onClick={handleLogOut}>
          LOGOUT
        </button>
    </header>
  );
}

export default Header;
