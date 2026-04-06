import styles from './Badge.module.css';
import type { Category } from '@/types';

type BadgeVariant = 'verified' | 'new' | 'sale' | 'out-of-stock' | 'category' | 'research-only';

interface BadgeProps {
  variant: BadgeVariant;
  category?: Category;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant, category, children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        styles.badge,
        styles[`badge--${variant}`],
        category ? styles[`badge--cat-${category}`] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
