import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const CATEGORY_LABELS: Record<string, string> = {
  sarms: 'SARM',
  peptides: 'Peptide',
  nootropics: 'Nootropic',
  prohormones: 'Prohormone',
  supplements: 'Supplement',
  injectables: 'Injectable',
  merch: 'Merchandise',
};

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const highestPrice = Math.max(...product.variants.map((v) => v.price));
  const priceDisplay =
    lowestPrice === highestPrice
      ? `$${lowestPrice.toFixed(2)}`
      : `$${lowestPrice.toFixed(2)} – $${highestPrice.toFixed(2)}`;

  return (
    <article
      className={styles.card}
      style={{ '--category-color': `var(--bl-color-${product.category})` } as React.CSSProperties}
    >
      {/* Category accent stripe */}
      <div className={styles.stripe} aria-hidden="true" />

      {/* Image area */}
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span className={styles.imagePlaceholderText}>
            {product.chemicalName.split(' ')[0]}
          </span>
        </div>

        {/* Badges */}
        <div className={styles.badges}>
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.variants.some((v) => v.originalPrice) && (
            <Badge variant="sale">Sale</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={`bl-label ${styles.categoryLabel}`}>
          {CATEGORY_LABELS[product.category] ?? product.category}
        </p>

        <h3 className={styles.name}>
          <Link href={`/products/${product.slug}`} className={styles.nameLink}>
            {product.name}
          </Link>
        </h3>

        <p className={`bl-mono--sm ${styles.formula}`}>
          {product.molecularFormula}
        </p>

        {/* Purity + COA */}
        <div className={styles.meta}>
          <span className={styles.purity}>
            <ShieldCheck size={13} className={styles.purityIcon} aria-hidden="true" />
            {product.purity} purity
          </span>
          <Link href={product.coaUrl} className={styles.coaLink} target="_blank" rel="noopener">
            COA ↗
          </Link>
        </div>

        {/* Reviews */}
        {product.reviewCount && product.reviewCount > 0 && (
          <div className={styles.reviews} aria-label={`${product.reviewAverage} out of 5 stars, ${product.reviewCount} reviews`}>
            <span className={styles.stars} aria-hidden="true">
              {'★'.repeat(Math.round(product.reviewAverage ?? 0))}
              {'☆'.repeat(5 - Math.round(product.reviewAverage ?? 0))}
            </span>
            <span className={styles.reviewCount}>({product.reviewCount})</span>
          </div>
        )}

        {/* Price + CTA */}
        <div className={styles.priceRow}>
          <span className={`bl-price ${styles.price}`}>{priceDisplay}</span>
          <Button size="sm" asChild>
            <Link href={`/products/${product.slug}`}>Add to Cart</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
