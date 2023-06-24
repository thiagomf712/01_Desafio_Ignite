import { useState } from 'react';
import { NewTask } from './NewTask';
import { TaskList } from './TasksList';
import styles from './styles.module.css';

export interface ITask {
  id: number;
  done: boolean;
  description: string;
}

export function TodoList() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, description: 'Tarefa 1', done: false },
    { id: 2, description: 'Tarefa 2', done: true },
  ]);
  const [newTaskId, setNewTaskId] = useState(3);

  function createTask(description: string) {
    setTasks(state => [...state, { id: newTaskId, description, done: false }])

    setNewTaskId(state => state + 1);
  }

  function completeTask(id: number, value: boolean) {
    setTasks(state => state.map(task => {
      if (task.id === id) {
        task.done = value;
      }

      return task;
    }))
  }

  function deleteTask(id: number) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  return (
    <main className={styles.wrapper}>
      <NewTask onCreateTask={createTask} />

      <TaskList 
        tasks={tasks} 
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </main>
  )
}