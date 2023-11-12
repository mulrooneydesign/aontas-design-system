import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export type NotificationProps = {
  children: ReactNode;
  number: number;
};

export function Notification({ children, number }: NotificationProps) {
  const [childOffsetHeight, setChildOffsetHeight] = useState<number>();
  const [childOffsetWidth, setChildOffsetWidth] = useState<number>();

  const childWrapperRef = useRef<HTMLDivElement>(null);

  // use these values to calculate where the notification is
  // depending on props - calc the CSS programatically.

  // OR just use top, right, bottom, left and pass as CSS to styles.
  useEffect(() => {
    console.log(childOffsetHeight, childOffsetWidth);
  }, [childOffsetHeight, childOffsetWidth]);

  useEffect(() => {
    if (!childWrapperRef.current) return;
    setChildOffsetHeight(childWrapperRef.current.offsetHeight);
    setChildOffsetWidth(childWrapperRef.current.offsetWidth);
  }, [childWrapperRef]);

  return (
    <div className={styles.notificationRoot}>
      <div className={styles.notificationIcon}>{number}</div>
      <div ref={childWrapperRef}>{children}</div>
    </div>
  );
}
