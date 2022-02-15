import styles from './list.module.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function List() {
  return (
    <>
    <Header />
      <section className={styles.container}>
        <div className={styles.containerSummary}>
          LISTA
        </div>
      </section>
    <Footer />
    </>
  );
}

export default List;
