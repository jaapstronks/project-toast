import React from 'react';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import useKeydown from '../../hooks/useKeydown';

function ToastShelf() {
  const { toastArray, setToastArray } =
    React.useContext(ToastContext);
  function emptyToast() {
    setToastArray([]);
  }

  useKeydown('Escape', emptyToast);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastArray.map((toastInstance) => {
        return (
          <li
            className={styles.toastWrapper}
            key={toastInstance.id}
          >
            <Toast
              variantValue={toastInstance.variant}
              id={toastInstance.id}
            >
              {toastInstance.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
