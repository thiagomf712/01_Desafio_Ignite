import { PlusCircle } from "phosphor-react";

import styles from './styles.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface INewTask {
  onCreateTask: (description: string) => void;
}

export function NewTask({ onCreateTask }: INewTask) {
  const [newTask, setNewTask] = useState('');

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);

    e.target.setCustomValidity('');
  }

  function handleInvalidInput(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('Campo obrigatório');
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onCreateTask(newTask);

    setNewTask('');
  }

  const newTaskInputClassName = newTask !== '' ? styles.inputFilled : undefined;

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input 
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleChangeInput}
        required
        onInvalid={handleInvalidInput}
        className={newTaskInputClassName}
      />

      <button type="submit">
        Criar
        <PlusCircle size="1rem" />
      </button>
    </form>
  )
}