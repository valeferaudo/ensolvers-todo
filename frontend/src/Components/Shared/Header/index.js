import styles from './header.module.css';

function Header(props) {

  const handleLogOut = async () => {
      
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
