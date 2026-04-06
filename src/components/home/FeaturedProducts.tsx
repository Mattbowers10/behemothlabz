import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';
import styles from './FeaturedProducts.module.css';

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className={`bl-section ${styles.section}`} aria-labelledby="featured-heading">
      <div className="bl-container">
        <div className={styles.header}>
          <div>
            <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Featured Compounds</p>
            <h2 id="featured-heading" className={styles.heading}>
              Most-Cited Research Compounds
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/category/sarms">View All Compounds →</Link>
          </Button>
        </div>
        <div className={styles.grid}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className={styles.disclaimer}>
          All compounds are for laboratory research use only. Not for human consumption or administration.
        </p>
      </div>
    </section>
  );
}
