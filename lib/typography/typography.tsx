import React from 'react';
import styles from './styles.module.css';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Header(props: TypographyProps) {
  const { children, type, ...rest } = props;

  switch (type) {
    case 'h1':
      return (
        <h1 className={styles.h1} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={styles.h2} {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={styles.h3} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={styles.h4} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={styles.h5} {...rest}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={styles.h6} {...rest}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={styles.h1} {...rest}>
          {children}
        </h1>
      );
  }
}
