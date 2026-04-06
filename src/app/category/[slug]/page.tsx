import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Category } from '@/types';
import { getProductsByCategory } from '@/lib/data';
import { ProductCard } from '@/components/product/ProductCard';
import { ResearchOnlyDisclaimer } from '@/components/ui/Disclaimer';
import styles from './page.module.css';

const CATEGORY_META: Record<Category, { label: string; description: string }> = {
  sarms: {
    label: 'SARMs',
    description:
      'Selective androgen receptor modulators (SARMs) for androgen receptor pathway research. All compounds are non-steroidal and provided for preclinical laboratory investigation.',
  },
  peptides: {
    label: 'Peptides',
    description:
      'Research-grade peptide compounds for tissue response modeling and molecular pathway studies. Sourced from ISO-accredited facilities with published Certificates of Analysis.',
  },
  nootropics: {
    label: 'Nootropics',
    description:
      'Compounds under preclinical investigation for cognitive pathway and neurotrophin regulation research. Provided for laboratory use only.',
  },
  prohormones: {
    label: 'Prohormones',
    description:
      'Prohormone compounds for preclinical androgen pathway research. All compounds supplied with third-party Certificate of Analysis documentation.',
  },
  supplements: {
    label: 'Supplements',
    description:
      'Research-grade ancillary and support compounds for laboratory use. Every batch tested and verified by independent accredited laboratories.',
  },
  injectables: {
    label: 'Injectables',
    description:
      'Injectable research compounds supplied in sterile-filtered format for laboratory research applications only. Not for human administration.',
  },
  merch: {
    label: 'Merchandise',
    description: 'Behemoth Labz branded merchandise.',
  },
};

const VALID_CATEGORIES = Object.keys(CATEGORY_META) as Category[];

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug as Category];
  if (!meta) return {};
  return {
    title: `${meta.label} Research Compounds | Behemoth Labz`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  if (!VALID_CATEGORIES.includes(slug as Category)) {
    notFound();
  }

  const category = slug as Category;
  const meta = CATEGORY_META[category];
  const products = getProductsByCategory(category);

  return (
    <div className={styles.page}>
      {/* Category header */}
      <div className={styles.pageHeader}>
        <div className="bl-container">
          <p className={`bl-label ${styles.breadcrumb}`}>
            <a href="/" className={styles.breadcrumbLink}>Home</a>
            {' / '}
            {meta.label}
          </p>
          <h1 className={styles.heading}>{meta.label} <span className="bl-gradient">Research Compounds</span></h1>
          <p className={styles.description}>{meta.description}</p>
          <ResearchOnlyDisclaimer variant="standard" />
        </div>
      </div>

      <div className="bl-container">
        <div className={styles.layout}>
          {/* Filter sidebar */}
          <aside className={styles.sidebar} aria-label="Filter compounds">
            <div className={styles.filterGroup}>
              <p className={`bl-label ${styles.filterLabel}`}>Form Factor</p>
              <ul className={styles.filterList}>
                {['Liquid', 'Capsules', 'Nasal Spray', 'Injectable', 'Powder'].map((form) => (
                  <li key={form} className={styles.filterItem}>
                    <label className={styles.filterCheck}>
                      <input type="checkbox" className={styles.checkbox} />
                      {form}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterGroup}>
              <p className={`bl-label ${styles.filterLabel}`}>Purity</p>
              <ul className={styles.filterList}>
                {['≥99%', '≥98%', '≥95%'].map((purity) => (
                  <li key={purity} className={styles.filterItem}>
                    <label className={styles.filterCheck}>
                      <input type="checkbox" className={styles.checkbox} />
                      {purity}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterGroup}>
              <p className={`bl-label ${styles.filterLabel}`}>Availability</p>
              <ul className={styles.filterList}>
                <li className={styles.filterItem}>
                  <label className={styles.filterCheck}>
                    <input type="checkbox" className={styles.checkbox} defaultChecked />
                    In Stock Only
                  </label>
                </li>
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <main className={styles.main}>
            <div className={styles.toolbar}>
              <p className={styles.count}>
                {products.length} compound{products.length !== 1 ? 's' : ''}
              </p>
              <label className={styles.sortLabel} htmlFor="sort-select">
                Sort by:
                <select id="sort-select" className={styles.sortSelect}>
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </label>
            </div>

            {products.length > 0 ? (
              <div className={styles.grid}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <p>No compounds currently available in this category.</p>
                <p className={styles.emptyNote}>
                  Check back soon — new batches are added regularly.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
