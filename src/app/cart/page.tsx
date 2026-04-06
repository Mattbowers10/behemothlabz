import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cart | Behemoth Labz',
};

// Cart page — UI shell. Cart state wired to state management in a future sprint.
export default function CartPage() {
  return (
    <div className={styles.page}>
      <div className="bl-container">
        <h1 className={styles.heading}>Your Cart</h1>

        <div className={styles.layout}>
          {/* Cart items column */}
          <div className={styles.itemsCol}>
            {/* Empty state for this sprint */}
            <div className={styles.empty}>
              <p className={styles.emptyText}>Your cart is empty.</p>
              <p className={styles.emptyNote}>
                All compounds are for laboratory research use only.
              </p>
              <Button asChild>
                <Link href="/category/sarms">Browse Research Compounds</Link>
              </Button>
            </div>
          </div>

          {/* Order summary column */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <p className={`bl-label ${styles.summaryTitle}`}>Order Summary</p>

              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>—</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span className={styles.freeShipping}>Free on orders $100+</span>
                </div>
              </div>

              <div className={styles.summaryTotal}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalVal}>$0.00</span>
              </div>

              <Button size="lg" className={styles.checkoutBtn} asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <div className={styles.trustRow}>
                <ShieldCheck size={14} aria-hidden="true" className={styles.trustIcon} />
                <span>Secure checkout · Third-party tested compounds</span>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <p>
                All compounds sold on this site are for laboratory and research use only.
                Not for human consumption, diagnostic, or therapeutic use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
