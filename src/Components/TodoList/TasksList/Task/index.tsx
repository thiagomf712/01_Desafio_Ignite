import styles from './styles.module.css';
import { Checkbox } from './Checkbox';
import { Trash } from 'phosphor-react';
import { ITask } from '../..';

interface ITaskParams {
  task: ITask;
  onCompleteTask: (id: number, value: boolean) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: ITaskParams) {
  const descriptionClassName = task.done ? styles.done : undefined;

  const checkboxId = `checkbox_${task.id}`;

  function handleCheck(value: boolean) {
    onCompleteTask(task.id, value);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <Checkbox 
        id={checkboxId} 
        checked={task.done}
        onCheck={handleCheck}
      />

      <p className={descriptionClassName}>
        {task.description}
      </p>

      <button onClick={handleDeleteTask}>
        <Trash size="1.25rem" />
      </button>
    </div>
  )
}