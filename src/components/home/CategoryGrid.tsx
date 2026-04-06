import Link from 'next/link';
import styles from './CategoryGrid.module.css';

const categories = [
  {
    id: 'sarms',
    label: 'SARMs',
    description: 'Selective androgen receptor modulators for AR pathway research.',
    href: '/category/sarms',
  },
  {
    id: 'peptides',
    label: 'Peptides',
    description: 'Peptide compounds for tissue response and molecular pathway studies.',
    href: '/category/peptides',
  },
  {
    id: 'nootropics',
    label: 'Nootropics',
    description: 'Compounds under investigation for cognitive pathway research.',
    href: '/category/nootropics',
  },
  {
    id: 'supplements',
    label: 'Supplements',
    description: 'Research-grade ancillary and support compounds.',
    href: '/category/supplements',
  },
  {
    id: 'research-sets',
    label: 'Research Sets',
    description: 'Multi-compound kits for parallel or comparative study protocols.',
    href: '/research-sets',
    span: true,
  },
];

export function CategoryGrid() {
  return (
    <section className={`bl-section--sm ${styles.section}`} aria-labelledby="categories-heading">
      <div className="bl-container">
        <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Browse by Compound Class</p>
        <h2 id="categories-heading" className={styles.heading}>
          Shop by Category
        </h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={[styles.tile, cat.span ? styles['tile--span'] : ''].filter(Boolean).join(' ')}
              style={{ '--cat-color': `var(--bl-color-${cat.id === 'research-sets' ? 'reactor-500' : cat.id})` } as React.CSSProperties}
              aria-label={`Browse ${cat.label}`}
            >
              <div className={styles.tileStripe} aria-hidden="true" />
              <p className={`bl-label ${styles.tileLabel}`}>{cat.label}</p>
              <p className={styles.tileDesc}>{cat.description}</p>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
