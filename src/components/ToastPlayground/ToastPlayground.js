import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = [
  'notice',
  'warning',
  'success',
  'error',
];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [variantValue, setVariantValue] =
    React.useState('notice');
  const [messageInput, setMessageInput] = React.useState();

  const submitHandler = (event) => {
    event.preventDefault();
    createToast(messageInput, variantValue);
    setVariantValue('notice');
    setMessageInput('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form
        onSubmit={submitHandler}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={messageInput}
              id="message"
              className={styles.messageInput}
              onChange={(event) => {
                setMessageInput(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => {
              return (
                <label
                  key={`variant-${variant}`}
                  htmlFor={`variant-${variant}`}
                >
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    checked={variant === variantValue}
                    onChange={() => {
                      setVariantValue(variant);
                    }}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
