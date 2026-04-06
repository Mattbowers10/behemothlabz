import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ShieldCheck, FileText, Download, Star } from 'lucide-react';
import { getProductBySlug, products } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  ResearchOnlyDisclaimer,
  BelowProductDisclaimer,
} from '@/components/ui/Disclaimer';
import styles from './page.module.css';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Behemoth Labz Research Compounds`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const defaultVariant = product.variants.find((v) => v.inStock) ?? product.variants[0];
  const isInjectable =
    product.isInjectable || product.forms.includes('injectable') || product.forms.includes('nasal-spray');

  const categoryColor = `var(--bl-color-${product.category})`;

  return (
    <div className={styles.page}>
      <div className="bl-container">
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href={`/category/${product.category}`} className={styles.breadcrumbLink}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </nav>

        <div className={styles.layout}>
          {/* Left: Image + COA above fold */}
          <div className={styles.imageCol}>
            <div
              className={styles.imageWrap}
              style={{ '--category-color': categoryColor } as React.CSSProperties}
            >
              <div className={styles.imageStripe} aria-hidden="true" />
              <div className={styles.imagePlaceholder} aria-hidden="true">
                <span className={styles.imagePlaceholderText}>{product.chemicalName.split(' ')[0]}</span>
              </div>
            </div>

            {/* COA above fold — mandatory compliance element */}
            <div className={styles.coaBox}>
              <div className={styles.coaHeader}>
                <ShieldCheck size={16} className={styles.coaIcon} aria-hidden="true" />
                <span className={`bl-label ${styles.coaTitle}`}>Certificate of Analysis</span>
                <span className={styles.coaBadge}>Third-Party Verified</span>
              </div>
              <div className={styles.coaRows}>
                <div className={styles.coaRow}>
                  <span className={styles.coaKey}>Batch</span>
                  <span className={`bl-mono--sm ${styles.coaVal}`}>{product.batchNumber}</span>
                </div>
                <div className={styles.coaRow}>
                  <span className={styles.coaKey}>Purity</span>
                  <span className={`${styles.coaVal} ${styles.coaValGreen}`}>{product.purity}</span>
                </div>
                <div className={styles.coaRow}>
                  <span className={styles.coaKey}>Method</span>
                  <span className={styles.coaVal}>HPLC</span>
                </div>
                <div className={styles.coaRow}>
                  <span className={styles.coaKey}>Lab</span>
                  <span className={styles.coaVal}>ISO/IEC 17025 Accredited</span>
                </div>
              </div>
              <Link href={product.coaUrl} className={styles.coaDownload} target="_blank" rel="noopener">
                <Download size={14} aria-hidden="true" />
                Download Full COA (PDF)
              </Link>
            </div>
          </div>

          {/* Right: Product info + purchase */}
          <div className={styles.infoCol}>
            {/* Badges */}
            <div className={styles.badges}>
              {product.isNew && <Badge variant="new">New</Badge>}
              <Badge variant="research-only">Research Use Only</Badge>
            </div>

            <h1 className={styles.name}>{product.name}</h1>

            {/* Chemical identifiers — mandatory compliance display */}
            <div className={styles.chemBlock}>
              <div className={styles.chemRow}>
                <span className={styles.chemKey}>Chemical Name</span>
                <span className={styles.chemVal}>{product.chemicalName}</span>
              </div>
              <div className={styles.chemRow}>
                <span className={styles.chemKey}>CAS Number</span>
                <span className={`bl-mono--sm ${styles.chemVal}`}>{product.casNumber}</span>
              </div>
              <div className={styles.chemRow}>
                <span className={styles.chemKey}>Molecular Formula</span>
                <span className={`bl-mono--sm ${styles.chemVal}`}>{product.molecularFormula}</span>
              </div>
              <div className={styles.chemRow}>
                <span className={styles.chemKey}>Molecular Weight</span>
                <span className={`bl-mono--sm ${styles.chemVal}`}>{product.molecularWeight}</span>
              </div>
              <div className={styles.chemRow}>
                <span className={styles.chemKey}>Purity</span>
                <span className={`${styles.chemVal} ${styles.chemValGreen}`}>
                  <ShieldCheck size={13} aria-hidden="true" /> {product.purity}
                </span>
              </div>
            </div>

            {/* Review stars */}
            {product.reviewCount && product.reviewCount > 0 && (
              <div
                className={styles.reviews}
                aria-label={`${product.reviewAverage} out of 5 stars, ${product.reviewCount} reviews`}
              >
                <span className={styles.stars} aria-hidden="true">
                  {'★'.repeat(Math.round(product.reviewAverage ?? 0))}
                  {'☆'.repeat(5 - Math.round(product.reviewAverage ?? 0))}
                </span>
                <span className={styles.reviewCount}>
                  {product.reviewAverage?.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            <p className={styles.shortDesc}>{product.shortDescription}</p>

            {/* Disclaimer above purchase — mandatory */}
            {isInjectable ? (
              <ResearchOnlyDisclaimer variant="injectable" />
            ) : (
              <ResearchOnlyDisclaimer variant="standard" />
            )}

            {/* Variant selector + price */}
            <div className={styles.purchaseBox}>
              <div className={styles.variantGroup}>
                <p className={`bl-label ${styles.variantLabel}`}>Select Size</p>
                <div className={styles.variantGrid}>
                  {product.variants.map((v) => (
                    <label
                      key={v.id}
                      className={[
                        styles.variantOption,
                        !v.inStock ? styles['variantOption--out'] : '',
                      ].filter(Boolean).join(' ')}
                    >
                      <input
                        type="radio"
                        name="variant"
                        value={v.id}
                        defaultChecked={v.id === defaultVariant.id}
                        disabled={!v.inStock}
                        className={styles.variantRadio}
                      />
                      <span className={styles.variantText}>{v.label}</span>
                      <span className={styles.variantPrice}>${v.price.toFixed(2)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.priceRow}>
                <span className={`bl-price ${styles.price}`}>From ${lowestPrice.toFixed(2)}</span>
              </div>

              <div className={styles.ctaRow}>
                <Button size="lg" className={styles.addBtn}>
                  Add to Cart
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href={product.coaUrl} target="_blank" rel="noopener">
                    <FileText size={16} aria-hidden="true" />
                    View COA
                  </Link>
                </Button>
              </div>

              {product.sdsUrl && (
                <Link href={product.sdsUrl} className={styles.sdsLink} target="_blank" rel="noopener">
                  <Download size={13} aria-hidden="true" />
                  Download SDS (Safety Data Sheet)
                </Link>
              )}
            </div>

            {/* Storage */}
            <div className={styles.storage}>
              <p className={`bl-label ${styles.storageLabel}`}>Storage Conditions</p>
              <p className={styles.storageText}>{product.storageConditions}</p>
            </div>
          </div>
        </div>

        {/* Product overview + disclaimers below fold */}
        <div className={styles.lower}>
          {/* COA second appearance — mandatory below description */}
          <div className={styles.coaRepeat}>
            <div className={styles.coaRepeatInner}>
              <ShieldCheck size={18} className={styles.coaIcon} aria-hidden="true" />
              <div>
                <p className={`bl-label ${styles.coaRepeatTitle}`}>Third-Party Verified · Batch {product.batchNumber}</p>
                <p className={styles.coaRepeatText}>
                  This batch has been independently tested by an ISO/IEC 17025 accredited laboratory.
                  {' '}
                  <Link href={product.coaUrl} target="_blank" rel="noopener" className={styles.coaRepeatLink}>
                    View full Certificate of Analysis →
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewMain}>
              <h2 className={styles.overviewHeading}>Research Overview</h2>
              <p className={styles.overviewText}>{product.overview}</p>

              {/* Below-product disclaimer — mandatory */}
              <BelowProductDisclaimer />
            </div>

            <div className={styles.overviewSide}>
              <div className={styles.detailCard}>
                <p className={`bl-label ${styles.detailCardTitle}`}>Compound Details</p>
                <div className={styles.detailRows}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Category</span>
                    <span className={styles.detailVal}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Forms Available</span>
                    <span className={styles.detailVal}>{product.forms.join(', ')}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>CAS Number</span>
                    <span className={`bl-mono--sm ${styles.detailVal}`}>{product.casNumber}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Batch Number</span>
                    <span className={`bl-mono--sm ${styles.detailVal}`}>{product.batchNumber}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Storage</span>
                    <span className={styles.detailVal}>{product.storageConditions.split('.')[0]}.</span>
                  </div>
                </div>
              </div>

              <div className={styles.detailCard}>
                <p className={`bl-label ${styles.detailCardTitle}`}>Documents</p>
                <div className={styles.docLinks}>
                  <Link href={product.coaUrl} target="_blank" rel="noopener" className={styles.docLink}>
                    <FileText size={14} aria-hidden="true" />
                    Certificate of Analysis
                  </Link>
                  {product.sdsUrl && (
                    <Link href={product.sdsUrl} target="_blank" rel="noopener" className={styles.docLink}>
                      <Download size={14} aria-hidden="true" />
                      Safety Data Sheet
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
