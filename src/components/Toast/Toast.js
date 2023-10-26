import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variantValue, id, children }) {
  const { dismissToast } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variantValue];

  return (
    <div
      className={`${styles.toast} ${styles[variantValue]}`}
    >
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <div className="VisuallyHidden_wrapper">
          {variantValue} -
        </div>
        {children}
      </p>
      <button
        onClick={() => dismissToast(id)}
        className={styles.closeButton}
        arial-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
