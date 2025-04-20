import React from 'react';
import clsx from 'clsx';
import styles from './Alert.module.css';

interface AlertProps {
  children: React.ReactNode;
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  type = 'info',
  title,
  className,
}) => {
  return (
    <div className={clsx(styles.alert, styles[`alert--${type}`], className)}>
      {title && <h4 className={styles.alertTitle}>{title}</h4>}
      <div className={styles.alertContent}>{children}</div>
    </div>
  );
};

export default Alert; 