import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks } from '../../store/tasks/tasks-selectors';
import {addTask, deleteTask, Task} from '../../store/tasks/tasks-actions';
import styles from './AllTasks.module.scss';



const AllTasks: React.FC = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  const allTasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleAdd = () => {
    const title = inputRef.current?.value
    if(title){
      dispatch(addTask(title))
      inputRef.current.value = '';
    }
  
  };

  return (
    <div className={styles['all-tasks']}>
      <h2>All Tasks</h2>
      <div>
        <input ref={inputRef}/>
        <button onClick={handleAdd}>add tusk</button>
      </div>
      <ul>
        {allTasks.map((task: Task) => (
          <li key={task.id}>
            <span className={task.deleted ? styles.task_deleted : ''}>
            {task.title}
            </span>
            {!task.deleted && <button onClick={() => handleDelete(task.id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
