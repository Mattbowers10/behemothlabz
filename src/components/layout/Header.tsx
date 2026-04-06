'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'All Compounds', href: '/shop' },
      { label: 'On Sale', href: '/shop?filter=sale' },
      { label: 'New Products', href: '/shop?filter=new' },
      { label: 'Top Compounds', href: '/shop?filter=top' },
    ],
  },
  {
    label: 'SARMs',
    href: '/category/sarms',
    children: [
      { label: 'Liquids', href: '/category/sarms?form=liquid' },
      { label: 'Capsules', href: '/category/sarms?form=capsules' },
    ],
  },
  {
    label: 'Peptides',
    href: '/category/peptides',
    children: [
      { label: 'Nasal Sprays', href: '/category/peptides?form=nasal-spray' },
      { label: 'Capsules', href: '/category/peptides?form=capsules' },
    ],
  },
  {
    label: 'Nootropics',
    href: '/category/nootropics',
    children: [],
  },
  {
    label: 'Research Sets',
    href: '/research-sets',
    children: [
      { label: 'AR Modulator Sets', href: '/research-sets?type=ar' },
      { label: 'GH Pathway Sets', href: '/research-sets?type=gh' },
      { label: 'Metabolic Research Sets', href: '/research-sets?type=metabolic' },
    ],
  },
];

const rightItems = [
  { label: 'Research Hub', href: '/research-hub' },
  { label: 'Rewards', href: '/rewards' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className={styles.header} role="banner">
      <div className={`bl-container ${styles.inner}`}>
        {/* Left nav */}
        <nav className={styles.navLeft} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children.length > 0 && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-haspopup={item.children.length > 0 ? 'true' : undefined}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <span className={styles.chevron} aria-hidden="true">›</span>
                  )}
                </Link>
                {item.children.length > 0 && activeMenu === item.label && (
                  <div className={styles.dropdown} role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={styles.dropdownLink}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Center logo */}
        <Link href="/" className={styles.logo} aria-label="Behemoth Labz — Home">
          BEHEMOTH LABZ
        </Link>

        {/* Right nav + actions */}
        <div className={styles.right}>
          <nav aria-label="Secondary navigation">
            <ul className={styles.navList}>
              {rightItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="sm"
              asChild
            >
              <Link href="/shop">Shop Now</Link>
            </Button>

            <button className={styles.iconBtn} aria-label="Search">
              <Search size={18} />
            </button>
            <button className={styles.iconBtn} aria-label="Account">
              <User size={18} />
            </button>
            <button className={styles.iconBtn} aria-label="Cart (0 items)">
              <ShoppingCart size={18} />
              <span className={styles.cartBadge} aria-hidden="true">0</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={styles.mobileToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className="bl-container">
            {[...navItems, ...rightItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.mobileCta}>
              <Button variant="primary" fullWidth asChild>
                <Link href="/shop" onClick={() => setMobileOpen(false)}>
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
