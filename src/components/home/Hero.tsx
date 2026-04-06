import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`bl-container ${styles.inner}`}>

        {/* Left: copy */}
        <div className={styles.content}>
          <p className={`bl-label ${styles.eyebrow}`}>
            USA-Made · Third-Party Tested
          </p>
          <h1 id="hero-heading" className={`bl-display ${styles.heading}`}>
            #1 <span className="bl-gradient">Trusted</span><br />
            Compound Vendor
          </h1>
          <p className={styles.sub}>
            USA-manufactured research compounds — SARMs, peptides, and nootropics.
            Every batch third-party verified with published Certificates of Analysis.
          </p>
          <div className={styles.ctas}>
            <Button size="lg" asChild>
              <Link href="/shop">Shop Research Compounds</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/quality-testing">View Certificates of Analysis</Link>
            </Button>
          </div>
          <p className={styles.disclaimer}>
            All compounds are for laboratory research use only. Not for human consumption.
          </p>
        </div>

        {/* Right: live compound data panel */}
        <div className={styles.panel} aria-hidden="true">
          <div className={styles.panelHeader}>
            <span className={styles.panelId}>COMPOUND // RAD-140</span>
            <span className={styles.panelLive}>
              <span className={styles.panelDot} />
              LIVE
            </span>
          </div>

          <div className={styles.panelRows}>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Chemical Name</span>
              <span className={styles.panelVal}>Testolone</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>CAS Number</span>
              <span className={`bl-mono--sm ${styles.panelMono}`}>1182367-47-0</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Mol. Formula</span>
              <span className={`bl-mono--sm ${styles.panelMono}`}>C₂₀H₁₆ClN₅O₂</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Mol. Weight</span>
              <span className={`bl-mono--sm ${styles.panelMono}`}>393.83 g/mol</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Batch</span>
              <span className={`bl-mono--sm ${styles.panelMono}`}>BL-2026-R140-04</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelKey}>Lab</span>
              <span className={styles.panelVal}>ISO/IEC 17025</span>
            </div>
          </div>

          <div className={styles.panelPurity}>
            <div className={styles.purityHeader}>
              <span className={styles.purityLabel}>PURITY (HPLC)</span>
              <span className={styles.purityValue}>99.2%</span>
            </div>
            <div className={styles.purityTrack}>
              <div className={styles.purityFill} />
            </div>
          </div>

          <div className={styles.panelStatus}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>VERIFIED · THIRD-PARTY TESTED · COA PUBLISHED</span>
          </div>
        </div>

      </div>
      <div className={styles.glow} aria-hidden="true" />
    </section>
  );
}
