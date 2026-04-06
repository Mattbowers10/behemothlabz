import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FlaskConical, FileCheck, ExternalLink } from 'lucide-react';
import { products } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Quality & Third-Party Testing | Behemoth Labz',
  description:
    'Every batch of every compound independently tested by ISO/IEC 17025 accredited laboratories. Certificates of Analysis published and searchable.',
};

const steps = [
  {
    icon: FlaskConical,
    step: '01',
    title: 'USA Formulation',
    body: 'Every compound is formulated in USA-based facilities adhering to current Good Manufacturing Practices (cGMP). Raw materials are sourced from verified suppliers with documented chain of custody.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Independent Third-Party Analysis',
    body: 'We send samples to independent ISO/IEC 17025 accredited laboratories with no commercial relationship to Behemoth Labz. Labs verify identity by NMR, purity by HPLC, and screen for contaminants, solvents, and heavy metals.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'COA Published Before Sale',
    body: 'Certificates of Analysis are published to the product page before that batch goes on sale. Every COA is searchable by batch number. We do not sell compounds without a current, verified COA.',
  },
];

export default function QualityTestingPage() {
  return (
    <div className={styles.page}>
      {/* Hero header */}
      <div className={styles.pageHeader}>
        <div className="bl-container">
          <p className={`bl-label ${styles.eyebrow}`}>Quality Assurance</p>
          <h1 className={styles.heading}><span className="bl-gradient">Third-Party Verified.</span><br />Every Batch. Every Compound.</h1>
          <p className={styles.desc}>
            We publish Certificates of Analysis from independent, ISO-accredited laboratories
            for every batch of every compound — before it goes on sale. No exceptions.
          </p>
        </div>
      </div>

      <div className="bl-container">
        {/* Testing process */}
        <section className={styles.section} aria-labelledby="process-heading">
          <h2 id="process-heading" className={styles.sectionHeading}>Our Testing Process</h2>
          <div className={styles.steps}>
            {steps.map(({ icon: Icon, step, title, body }) => (
              <div key={step} className={styles.step}>
                <div className={styles.stepMeta}>
                  <span className={`bl-mono--sm ${styles.stepNumber}`}>{step}</span>
                  <div className={styles.stepIconWrap} aria-hidden="true">
                    <Icon size={22} />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepBody}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we test for */}
        <section className={styles.section} aria-labelledby="tests-heading">
          <h2 id="tests-heading" className={styles.sectionHeading}>What Each COA Verifies</h2>
          <div className={styles.testGrid}>
            {[
              { label: 'Chemical Identity', desc: 'NMR spectroscopy confirms the compound is what we say it is.' },
              { label: 'Purity (HPLC)', desc: 'High-performance liquid chromatography quantifies the active compound percentage.' },
              { label: 'Solvent Residuals', desc: 'Residual solvent levels tested against ICH Q3C guidelines.' },
              { label: 'Heavy Metals', desc: 'ICP-MS screening for lead, cadmium, arsenic, and mercury.' },
              { label: 'Microbial Limits', desc: 'Aerobic plate count and absence of specified organisms.' },
              { label: 'Appearance', desc: 'Physical description, color, and form factor verified against specification.' },
            ].map(({ label, desc }) => (
              <div key={label} className={styles.testCard}>
                <div className={styles.testCheck} aria-hidden="true">✓</div>
                <div>
                  <p className={`bl-label ${styles.testLabel}`}>{label}</p>
                  <p className={styles.testDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COA library */}
        <section className={styles.section} aria-labelledby="coa-heading">
          <h2 id="coa-heading" className={styles.sectionHeading}>COA Library</h2>
          <p className={styles.sectionDesc}>
            Current batch COAs for all active compounds. Click any product to view its full Certificate of Analysis.
          </p>
          <div className={styles.coaTable}>
            <div className={styles.coaTableHeader}>
              <span>Compound</span>
              <span>Batch</span>
              <span>Purity</span>
              <span>Status</span>
              <span>COA</span>
            </div>
            {products.map((product) => (
              <div key={product.id} className={styles.coaTableRow}>
                <span className={styles.coaCompound}>
                  <Link href={`/products/${product.slug}`} className={styles.coaCompoundLink}>
                    {product.name}
                  </Link>
                  <span className={`bl-mono--sm ${styles.coaCas}`}>{product.casNumber}</span>
                </span>
                <span className={`bl-mono--sm ${styles.coaVal}`}>{product.batchNumber}</span>
                <span className={`${styles.coaVal} ${styles.coaValGreen}`}>{product.purity}</span>
                <span className={styles.coaPass}>✓ Pass</span>
                <Link
                  href={product.coaUrl}
                  className={styles.coaLink}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Download COA for ${product.name}`}
                >
                  <ExternalLink size={13} aria-hidden="true" />
                  View PDF
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Lab accreditation note */}
        <div className={styles.accreditationNote}>
          <ShieldCheck size={20} className={styles.accredIcon} aria-hidden="true" />
          <p>
            All third-party testing is conducted by laboratories accredited to <strong>ISO/IEC 17025</strong> —
            the international standard for testing and calibration laboratory competence. Accreditation is
            verified independently by national accreditation bodies. Behemoth Labz has no financial
            relationship with our testing laboratories beyond fee-for-service testing agreements.
          </p>
        </div>
      </div>
    </div>
  );
}
