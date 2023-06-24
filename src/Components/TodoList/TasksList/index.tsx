import { ITask } from '..';
import { Task } from './Task';
import styles from './styles.module.css';

interface ITaskList {
  tasks: ITask[];
  onCompleteTask: (id:number, value: boolean) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskList({ tasks, onCompleteTask, onDeleteTask }: ITaskList) {
  const [tasksCreated, tasksDone] = tasks.reduce(([created, done], task) => {
    created += 1;

    if (task.done) {
      done += 1;
    }

    return [created, done];
  }, [0, 0])

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.info}>
          <p className={styles.created}>Tarefas criadas</p>
          <span>{tasksCreated}</span>
        </div>

        <div className={styles.info}>
          <p className={styles.ended}>Concluídas</p>
          <span>{tasksDone} de {tasksCreated}</span>
        </div>
      </header>

      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onCompleteTask={onCompleteTask}  
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}