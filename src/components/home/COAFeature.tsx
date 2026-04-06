import Link from 'next/link';
import { ShieldCheck, FlaskConical, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './COAFeature.module.css';

const steps = [
  {
    icon: FlaskConical,
    label: 'USA Formulation',
    desc: 'Every compound formulated in USA-based facilities.',
  },
  {
    icon: ShieldCheck,
    label: 'Third-Party Analysis',
    desc: 'Independent ISO-accredited lab verifies purity, identity, and contaminants.',
  },
  {
    icon: FileCheck,
    label: 'COA Published',
    desc: 'Certificate of Analysis posted publicly for every batch — searchable by batch number.',
  },
];

export function COAFeature() {
  return (
    <section className={`bl-section ${styles.section}`} aria-labelledby="coa-heading">
      <div className="bl-container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Quality Assurance</p>
            <h2 id="coa-heading" className={styles.heading}>
              Every Batch.<br />Third-Party Verified.
            </h2>
            <p className={styles.desc}>
              We don&apos;t ask you to take our word for it. Every batch of every compound
              is tested by an independent, accredited laboratory. Certificates of Analysis
              are published and searchable — before you order.
            </p>
            <div className={styles.steps}>
              {steps.map(({ icon: Icon, label, desc }) => (
                <div key={label} className={styles.step}>
                  <div className={styles.stepIcon}>
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className={`bl-label ${styles.stepLabel}`}>{label}</p>
                    <p className={styles.stepDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" asChild>
              <Link href="/quality-testing">View COA Library →</Link>
            </Button>
          </div>

          {/* COA mockup panel */}
          <div className={styles.panel} aria-hidden="true">
            <div className={styles.panelHeader}>
              <span className={`bl-label ${styles.panelTitle}`}>Certificate of Analysis</span>
              <span className={styles.panelBadge}>Third-Party Verified</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Compound</span>
              <span className={styles.panelVal}>RAD-140 (Testolone)</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>CAS Number</span>
              <span className={`bl-mono--sm ${styles.panelVal}`}>1182367-47-0</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Purity (HPLC)</span>
              <span className={`${styles.panelVal} ${styles.panelValGreen}`}>≥99.2%</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Batch</span>
              <span className={`bl-mono--sm ${styles.panelVal}`}>BL-2026-R140-04</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Lab</span>
              <span className={styles.panelVal}>ISO/IEC 17025 Accredited</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Result</span>
              <span className={`${styles.panelVal} ${styles.panelValGreen}`}>✓ Pass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
