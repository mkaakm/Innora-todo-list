import React from 'react';
import { useSelector } from 'react-redux';
import { selectDeletedTasks } from '../../store/tasks/tasks-selectors';
import { Task } from '../../store/tasks/tasks-actions';
import styles from './DeletedTasks.module.scss';

const DeletedTasks: React.FC = () => {
  const deletedTasks = useSelector(selectDeletedTasks);

  return (
    <div className={styles['deleted-tasks']}>
      <h2>Deleted Tasks</h2>
      <ul>
        {deletedTasks.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeletedTasks;
