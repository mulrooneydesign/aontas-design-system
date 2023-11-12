import { ReactNode } from 'react';
import styles from './styles.module.css';

export type NotificationProps = {
  children: ReactNode;
  number: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export function Notification({
  children,
  number,
  top,
  right,
  bottom,
  left,
}: NotificationProps) {
  return (
    <div className={styles.notificationRoot}>
      <div
        className={`${styles.notificationIcon}`}
        style={{
          top: top ? `${top}px` : 'unset',
          right: right ? `${right}px` : 'unset',
          bottom: bottom ? `${bottom}px` : 'unset',
          left: left ? `${left}px` : 'unset',
        }}>
        {number}
      </div>
      <div>{children}</div>
    </div>
  );
}
