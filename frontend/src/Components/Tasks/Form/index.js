import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOneTask } from '../../../Redux/Tasks/thunks';
import styles from './form.module.css';

function TaskForm({ id, handleSubmit, handleShowModal }) {
  const dispatch = useDispatch();
  const [taskText, setTaskTest] = useState({description: ''});

  useEffect(() => {
    if (id) {
      dispatch(getOneTask(id)).then((data) => {
          setTaskTest({description: data.description })
      })
    }
  }, []);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTaskTest({ ...taskText, [name]: value });
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(taskText.description.trim() !== ''){
        handleSubmit(taskText);
        handleShowModal(false);
    }
  }
  return (
    <>
      <h3>Update Task</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type='text' name="description" onChange={handleOnChange} value={taskText.description} />
        <button type='submit'>Add</button>
      </form>
    </>
  );
}
export default TaskForm;
