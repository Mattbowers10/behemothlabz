'use client';

import { useState } from 'react';
import styles from './AcknowledgmentCheckbox.module.css';

interface AcknowledgmentCheckboxProps {
  onAcknowledged: (acknowledged: boolean) => void;
}

const ACKNOWLEDGMENTS = [
  'I am 21 years of age or older.',
  'I am a qualified researcher, laboratory professional, or licensed professional purchasing these compounds for legitimate scientific research purposes only.',
  'I understand that these compounds are NOT intended for human consumption, therapeutic use, veterinary use, or any application outside of controlled laboratory research.',
  'I acknowledge that these compounds have NOT been approved by the FDA and are not dietary supplements, drugs, or medical devices.',
  'I accept full legal responsibility for the lawful use, handling, and disposal of these research compounds in compliance with all applicable federal, state, and local laws.',
  'I confirm that the compounds will be stored securely and will not be accessible to unauthorized individuals, minors, or individuals without appropriate research qualifications.',
];

export function AcknowledgmentCheckbox({ onAcknowledged }: AcknowledgmentCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onAcknowledged(e.target.checked);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={`bl-label ${styles.title}`}>⚗ Required Research Acknowledgment</span>
        <span className={styles.required}>Required to complete order</span>
      </div>

      <ul className={styles.list}>
        {ACKNOWLEDGMENTS.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <label className={[styles.checkLabel, checked ? styles['checkLabel--checked'] : ''].filter(Boolean).join(' ')}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.checkbox}
          aria-required="true"
          aria-label="I acknowledge all research use requirements above"
        />
        <span className={styles.checkText}>
          <strong>I have read and agree</strong> to all of the above statements. I understand that
          Behemoth Labz sells these compounds exclusively for laboratory and scientific research purposes.
          Misrepresentation of intended use is a violation of the terms of purchase.
        </span>
      </label>
    </div>
  );
}
