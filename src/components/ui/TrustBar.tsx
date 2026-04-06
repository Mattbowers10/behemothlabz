import { FlaskConical, Truck, Clock, ShieldCheck } from 'lucide-react';
import styles from './TrustBar.module.css';

const signals = [
  {
    icon: ShieldCheck,
    label: 'Third-Party Tested',
    sub: 'Every batch verified',
  },
  {
    icon: FlaskConical,
    label: 'Research-Grade Purity',
    sub: '≥98% on all compounds',
  },
  {
    icon: Truck,
    label: 'Free Shipping',
    sub: 'On orders $100+',
  },
  {
    icon: Clock,
    label: 'Same-Day Processing',
    sub: 'Orders before 2pm ET',
  },
];

export function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Trust signals">
      <div className={`bl-container ${styles.inner}`}>
        {signals.map(({ icon: Icon, label, sub }) => (
          <div key={label} className={styles.signal}>
            <Icon className={styles.icon} size={22} aria-hidden="true" />
            <div>
              <p className={styles.label}>{label}</p>
              <p className={styles.sub}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
