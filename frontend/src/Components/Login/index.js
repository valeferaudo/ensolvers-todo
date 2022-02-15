import styles from './login.module.css';

function Login() {
  return (
    <section className={styles.container}>
      <div className={styles.containerSummary}>
        <form className={styles.form}>
          <div>
            <input
              name='email'
              label='Email'
              element='input'
              placeholder='Enter your email'
            />
            <input
              name='password'
              label='Password'
              type='password'
              element='input'
              placeholder='Enter your password'
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.btnLogin}
              type='submit'
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
