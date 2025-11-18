import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
  children: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    position?: 'top' | 'left' | 'right';
  };
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  title,
  header,
  footer,
  image,
  className = '',
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    image?.position && styles[`image-${image.position}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hasHeader = title || header || image?.position === 'top';
  const hasFooter = !!footer;

  return (
    <div className={cardClasses} {...props}>
      {hasHeader && (
        <div className={styles.header}>
          {image?.position === 'top' && (
            <div className={styles.imageContainer}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          )}
          {(title || header) && (
            <div className={styles.headerContent}>
              {title && <h3 className={styles.title}>{title}</h3>}
              {header}
            </div>
          )}
        </div>
      )}
      
      <div className={styles.content}>
        {image?.position === 'left' && (
          <div className={styles.imageContainer}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {image?.position === 'right' && (
          <div className={styles.imageContainer}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        )}
      </div>

      {hasFooter && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

