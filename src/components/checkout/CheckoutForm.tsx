'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AcknowledgmentCheckbox } from './AcknowledgmentCheckbox';
import { ShieldCheck, Lock } from 'lucide-react';
import styles from './CheckoutForm.module.css';

export function CheckoutForm() {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className={styles.page}>
      <div className="bl-container">
        <h1 className={styles.heading}>Checkout</h1>

        <div className={styles.layout}>
          {/* Left: form fields */}
          <div className={styles.formCol}>
            {/* Contact */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email Address</label>
                  <input id="email" type="email" className={styles.input} placeholder="researcher@institution.edu" autoComplete="email" />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Shipping Address</h2>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="first-name">First Name</label>
                  <input id="first-name" type="text" className={styles.input} autoComplete="given-name" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="last-name">Last Name</label>
                  <input id="last-name" type="text" className={styles.input} autoComplete="family-name" />
                </div>
                <div className={`${styles.field} ${styles['field--full']}`}>
                  <label className={styles.label} htmlFor="institution">Institution / Organization</label>
                  <input id="institution" type="text" className={styles.input} placeholder="University, research lab, or company name" />
                </div>
                <div className={`${styles.field} ${styles['field--full']}`}>
                  <label className={styles.label} htmlFor="address">Street Address</label>
                  <input id="address" type="text" className={styles.input} autoComplete="street-address" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="city">City</label>
                  <input id="city" type="text" className={styles.input} autoComplete="address-level2" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="state">State</label>
                  <select id="state" className={styles.select} autoComplete="address-level1">
                    <option value="">Select state</option>
                    {['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="zip">ZIP Code</label>
                  <input id="zip" type="text" className={styles.input} autoComplete="postal-code" maxLength={10} />
                </div>
              </div>
            </div>

            {/* Mandatory acknowledgment — compliance requirement */}
            <div className={styles.section}>
              <AcknowledgmentCheckbox onAcknowledged={setAcknowledged} />
            </div>

            {/* Submit */}
            <Button
              size="lg"
              className={styles.submitBtn}
              disabled={!acknowledged}
              aria-disabled={!acknowledged}
            >
              <Lock size={16} aria-hidden="true" />
              {acknowledged ? 'Complete Order' : 'Complete the acknowledgment above to continue'}
            </Button>

            {!acknowledged && (
              <p className={styles.submitNote} role="alert" aria-live="polite">
                You must agree to the research use acknowledgment before placing an order.
              </p>
            )}
          </div>

          {/* Right: order summary */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <p className={`bl-label ${styles.summaryTitle}`}>Order Summary</p>

              <div className={styles.summaryEmpty}>
                <p>No items in cart.</p>
              </div>

              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span className={styles.totalVal}>$0.00</span>
              </div>
            </div>

            <div className={styles.secureNote}>
              <ShieldCheck size={14} aria-hidden="true" className={styles.secureIcon} />
              <span>256-bit SSL encrypted checkout</span>
            </div>

            <div className={styles.complianceNote}>
              <p className={`bl-label ${styles.complianceLabel}`}>Legal Notice</p>
              <p>
                All products are sold for laboratory research use only. By completing this order you
                confirm you are 21+ and purchasing for legitimate scientific research. Misuse is the
                sole responsibility of the purchaser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
