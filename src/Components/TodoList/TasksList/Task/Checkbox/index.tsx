import { ChangeEvent } from 'react';
import styles from './styles.module.css';

interface ICheckbox {
  id: string;
  checked: boolean;
  onCheck: (newValue: boolean) => void;
}

export function Checkbox({ id, checked, onCheck }: ICheckbox) {
  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    onCheck(e.target.checked);
  }

  return (
    <div className={styles.checkbox}>
      <input 
        id={id} 
        type='checkbox' 
        className={styles.checkbox} 
        checked={checked}
        onChange={handleCheck}
      />

      <label htmlFor={id}></label>
    </div>
  )
}