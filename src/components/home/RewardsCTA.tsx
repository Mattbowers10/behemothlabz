import Link from 'next/link';
import { Gift, Star, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './RewardsCTA.module.css';

const perks = [
  { icon: Star, label: 'Earn Points', desc: '1 point per $1 spent on research compounds.' },
  { icon: Gift, label: 'Redeem Rewards', desc: 'Apply points at checkout for instant discounts.' },
  { icon: Repeat, label: 'Exclusive Access', desc: 'Early batch notifications and member-only pricing.' },
];

export function RewardsCTA() {
  return (
    <section className={`bl-section ${styles.section}`} aria-labelledby="rewards-heading">
      <div className="bl-container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Behemoth Rewards</p>
            <h2 id="rewards-heading" className={styles.heading}>
              Research More.<br />Save More.
            </h2>
            <p className={styles.desc}>
              Join our researcher rewards program and earn points on every order.
              Redeem for discounts, get first access to new batches, and unlock
              member-only compound pricing.
            </p>
            <Button variant="primary" asChild>
              <Link href="/rewards">Join Rewards Program</Link>
            </Button>
          </div>

          <div className={styles.perks}>
            {perks.map(({ icon: Icon, label, desc }) => (
              <div key={label} className={styles.perk}>
                <div className={styles.perkIcon} aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div>
                  <p className={`bl-label ${styles.perkLabel}`}>{label}</p>
                  <p className={styles.perkDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
