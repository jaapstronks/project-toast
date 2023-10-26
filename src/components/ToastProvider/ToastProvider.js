import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);
  function dismissToast(id) {
    const newArray = toastArray.filter((toast) => {
      return toast.id !== id;
    });
    setToastArray(newArray);
  }
  function createToast(message, variant) {
    const nextToasts = [
      ...toastArray,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToastArray(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toastArray,
        setToastArray,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
