import styles from './Disclaimer.module.css';

interface DisclaimerProps {
  variant?: 'standard' | 'compact' | 'prominent' | 'injectable';
  children?: React.ReactNode;
}

const DISCLAIMERS = {
  standard: `RESEARCH USE ONLY: This product is intended solely for in vitro research, laboratory experimentation, and scientific investigation. It is not a dietary supplement, food, drug, or cosmetic product and has not been approved by the FDA for any human or veterinary use. This product must not be used for human consumption, therapeutic application, or any clinical purpose. By purchasing this product, you confirm that you will use it exclusively for legitimate research purposes.`,

  below: `Preclinical and published scientific research indicates potential mechanisms of action for this compound in laboratory and animal models. Any references to published studies are for informational purposes only and do not constitute a claim that this product produces the same effects in humans. The safety and efficacy of this compound in humans have not been established.`,

  injectable: `MANDATORY INJECTABLE DISCLAIMER: This injectable formulation is for laboratory use only. Injection equipment is included for laboratory handling purposes ONLY — not for human administration. Injection into any human or animal is strictly prohibited and illegal. Use only in sterile, controlled laboratory settings. Possession of injection equipment with this compound may be interpreted as evidence of intent for human administration.`,
};

export function ResearchOnlyDisclaimer({ variant = 'standard' }: DisclaimerProps) {
  if (variant === 'compact') {
    return (
      <p className={styles.compact} role="note">
        ⚗ All compounds are for laboratory research use only. Not for human consumption or administration.
      </p>
    );
  }

  const text = variant === 'injectable' ? DISCLAIMERS.injectable : DISCLAIMERS.standard;

  return (
    <div
      className={[
        styles.disclaimer,
        variant === 'prominent' || variant === 'injectable'
          ? styles['disclaimer--prominent']
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="note"
      aria-label="Research use only disclaimer"
    >
      <span className={styles.label}>
        {variant === 'injectable' ? '⚠ Injectable Warning' : '⚗ Research Use Only'}
      </span>
      <p>{text}</p>
    </div>
  );
}

export function BelowProductDisclaimer() {
  return (
    <div className={styles.disclaimer} role="note">
      <p>{DISCLAIMERS.below}</p>
    </div>
  );
}

export function FooterDisclaimer() {
  return (
    <p className={styles.footer}>
      All products sold on this website are intended for laboratory and research purposes only.
      They are not intended for human or veterinary use, consumption, or application. By
      purchasing from BehemothLabz.com, you acknowledge that these products are not dietary
      supplements, food additives, or approved for any clinical use. BehemothLabz.com assumes
      no liability for any misuse of these products. The buyer assumes all responsibility for
      the lawful use and handling of all products purchased.
    </p>
  );
}
