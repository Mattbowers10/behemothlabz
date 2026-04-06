import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, Tag } from 'lucide-react';
import { researchSets, products } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { ResearchOnlyDisclaimer } from '@/components/ui/Disclaimer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Research Sets | Multi-Compound Kits | Behemoth Labz',
  description:
    'Curated multi-compound research kits for parallel or comparative study protocols. Every set includes third-party verified compounds with published COAs.',
};

export default function ResearchSetsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="bl-container">
          <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Research Sets</p>
          <h1 className={styles.heading}>
            Multi-Compound <span className="bl-gradient">Research Kits</span>
          </h1>
          <p className={styles.desc}>
            Curated compound sets for parallel or comparative study protocols.
            Every set is assembled from individually COA-verified batches with
            published third-party test results.
          </p>
          <ResearchOnlyDisclaimer variant="compact" />
        </div>
      </div>

      <div className="bl-container">
        <div className={styles.body}>
          {/* Sets grid */}
          <div className={styles.setsGrid}>
            {researchSets.map((set) => {
              const setProducts = set.productIds
                .map((id) => products.find((p) => p.id === id))
                .filter(Boolean);

              const savings = set.originalPrice
                ? (set.originalPrice - set.price).toFixed(2)
                : null;

              return (
                <div key={set.id} className={styles.setCard}>
                  {/* Card image area */}
                  <div className={styles.setImage} aria-hidden="true">
                    <div className={styles.setImageInner}>
                      <Package size={28} className={styles.setIcon} />
                      <p className={`bl-mono--sm ${styles.setImageLabel}`}>{set.name}</p>
                    </div>
                  </div>

                  <div className={styles.setContent}>
                    <div className={styles.setMeta}>
                      <span className={`bl-label ${styles.setCategory}`}>{set.category}</span>
                      {savings && (
                        <span className={styles.setSavings}>
                          <Tag size={11} aria-hidden="true" />
                          Save ${savings}
                        </span>
                      )}
                    </div>

                    <h2 className={styles.setName}>{set.name}</h2>
                    <p className={styles.setDesc}>{set.description}</p>

                    {/* Included compounds */}
                    <div className={styles.setCompounds}>
                      <p className={`bl-label ${styles.compoundsLabel}`}>Included Compounds</p>
                      <ul className={styles.compoundsList}>
                        {setProducts.map((product) => product && (
                          <li key={product.id} className={styles.compoundItem}>
                            <span className={styles.compoundName}>{product.name}</span>
                            <span className={`bl-mono--sm ${styles.compoundCas}`}>{product.casNumber}</span>
                            <span className={styles.compoundPurity}>{product.purity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.setPricing}>
                      <div className={styles.setPriceBlock}>
                        <span className={styles.setPrice}>${set.price.toFixed(2)}</span>
                        {set.originalPrice && (
                          <span className={styles.setOriginalPrice}>${set.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      <Button variant="primary" asChild>
                        <Link href={`/cart?set=${set.slug}`}>Add Set to Cart</Link>
                      </Button>
                    </div>

                    <p className={styles.setDisclaimer}>
                      All compounds for laboratory research use only. Not for human consumption.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info section */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoHeading}>About Research Sets</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <p className={`bl-label ${styles.infoCardLabel}`}>Individually Verified</p>
                <p className={styles.infoCardText}>
                  Each compound in a research set is independently tested and ships with its own
                  batch-specific Certificate of Analysis from an ISO/IEC 17025 accredited laboratory.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={`bl-label ${styles.infoCardLabel}`}>Curated for Protocol Compatibility</p>
                <p className={styles.infoCardText}>
                  Sets are assembled based on complementary research applications, making them
                  suitable for parallel assay or comparative receptor binding study designs.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={`bl-label ${styles.infoCardLabel}`}>Set Pricing</p>
                <p className={styles.infoCardText}>
                  Research sets are priced below the individual compound sum. All compounds ship
                  together in appropriate storage packaging per their individual requirements.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bottomDisclaimer}>
            <p>
              <strong>Research Use Only.</strong> All compounds in Behemoth Labz Research Sets are intended
              solely for in vitro research, laboratory experimentation, and scientific investigation.
              They are not dietary supplements, drugs, or cosmetic products and have not been approved
              by the FDA for human consumption, therapeutic application, or any clinical purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
