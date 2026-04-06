import Link from 'next/link';
import { FooterDisclaimer } from '@/components/ui/Disclaimer';
import styles from './Footer.module.css';

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'All Compounds', href: '/shop' },
      { label: 'SARMs', href: '/category/sarms', accent: 'sarms' },
      { label: 'Peptides', href: '/category/peptides', accent: 'peptides' },
      { label: 'Nootropics', href: '/category/nootropics', accent: 'nootropics' },
      { label: 'Research Sets', href: '/research-sets' },
      { label: 'On Sale', href: '/shop?filter=sale' },
      { label: 'New Products', href: '/shop?filter=new' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Research Hub', href: '/research-hub' },
      { label: 'Quality & Testing', href: '/quality-testing' },
      { label: 'Certificate of Analysis', href: '/quality-testing#coa-library' },
      { label: 'About Us', href: '/about' },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'My Account', href: '/account' },
      { label: 'Rewards Program', href: '/rewards' },
      { label: 'Order History', href: '/account/orders' },
      { label: 'Track Your Order', href: '/account/track' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'How To Pay', href: '/how-to-pay' },
      { label: 'Shipping Policy', href: '/shipping-policy' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Research Disclaimer', href: '/research-disclaimer' },
    ],
  },
];

type AccentKey = 'sarms' | 'peptides' | 'nootropics';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="bl-container">
        {/* Main columns */}
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              BEHEMOTH LABZ
            </Link>
            <p className={styles.tagline}>
              USA-manufactured research compounds.<br />
              Third-party tested. Every batch.
            </p>
            <address className={styles.contact}>
              <a href="mailto:support@behemothlabz.com" className={styles.contactLink}>
                support@behemothlabz.com
              </a>
              <a href="tel:+13074290990" className={styles.contactLink}>
                (307) 429-0990
              </a>
            </address>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading} className={styles.column}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul className={styles.colList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={[
                        styles.colLink,
                        'accent' in link && link.accent
                          ? styles[`colLink--${link.accent as AccentKey}`]
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Compliance disclaimer */}
        <div className={styles.disclaimerWrap}>
          <FooterDisclaimer />
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BehemothLabz.com. All Rights Reserved.
          </p>
          <p className={styles.legal}>
            All products are for laboratory research use only.{' '}
            <Link href="/research-disclaimer" className={styles.legalLink}>
              View full disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
