import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask } from '../../Redux/Tasks/thunks';
import styles from './list.module.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Spinner from '../Shared/Spinner';
import { FaEdit } from "react-icons/fa";

function List() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const isLoadingForm = useSelector((state) => state.tasks.isLoadingForm);

  useEffect(() => {
    dispatch(getTasks());
  }, [])

  const onCompleted = (id, task) => {
    dispatch(updateTask(task, id)).then(() => {
      dispatch(getTasks());
    });
  }

  if (isLoading || isLoadingForm)
    return <Spinner type="ThreeDots" color="#002147" height={80} width={80} />;
  return (
    <>
    <Header />
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody>
            {tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td><input type="checkbox" 
                        checked={task.completed} 
                        onChange={() => onCompleted(task.id, {
                          ...task,
                          completed: !task.completed
                        }) }
                      /></td>
                  <td className={task.completed ? styles.completed : styles.description}>{task.description}</td>
                  <td>
                      <button className={styles.btnEdit}><FaEdit /></button>
                  </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    <Footer />
    </>
  );
}

export default List;
