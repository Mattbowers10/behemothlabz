import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock } from 'lucide-react';
import { articles } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Research Hub | Mechanism-of-Action Overviews | Behemoth Labz',
  description:
    'Peer-reviewed summaries and preclinical research overviews for investigators. Mechanism-of-action articles for SARMs, peptides, and research compounds.',
};

const categoryColors: Record<string, string> = {
  sarms: 'var(--bl-color-sarms)',
  peptides: 'var(--bl-color-peptides)',
  nootropics: 'var(--bl-color-nootropics)',
  regulatory: 'var(--bl-color-reactor-400)',
  'multi-compound': 'var(--bl-color-reactor-500)',
};

const CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'sarms', label: 'SARMs' },
  { id: 'peptides', label: 'Peptides' },
  { id: 'nootropics', label: 'Nootropics' },
  { id: 'regulatory', label: 'Regulatory & QA' },
];

export default function ResearchHubPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="bl-container">
          <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Research Hub</p>
          <h1 className={styles.heading}>
            <span className="bl-gradient">Mechanism-of-Action</span> Overviews
          </h1>
          <p className={styles.desc}>
            Peer-reviewed summaries and preclinical research overviews written for investigators.
            All articles are for educational purposes only and do not constitute medical or clinical guidance.
          </p>
        </div>
      </div>

      <div className="bl-container">
        <div className={styles.layout}>
          {/* Sidebar nav */}
          <aside className={styles.sidebar}>
            <p className={`bl-label ${styles.sidebarLabel}`}>Topics</p>
            <ul className={styles.categoryList}>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <span
                    className={styles.categoryItem}
                    style={cat.id !== 'all' ? { color: categoryColors[cat.id] } : undefined}
                  >
                    {cat.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.sidebarNote}>
              <p className={`bl-label ${styles.sidebarNoteLabel}`}>Research Use Only</p>
              <p className={styles.sidebarNoteText}>
                All overviews summarize preclinical literature. No article constitutes medical advice or implies safety or efficacy for human use.
              </p>
            </div>
          </aside>

          {/* Article grid */}
          <main>
            <p className={styles.count}>{articles.length} articles</p>
            <div className={styles.grid}>
              {articles.map((article) => (
                <Link key={article.id} href={`/research-hub/${article.slug}`} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span
                      className={`bl-label ${styles.tag}`}
                      style={{ color: categoryColors[article.category] ?? 'var(--bl-color-reactor-400)' }}
                    >
                      {article.category}
                    </span>
                    <span className={styles.readTime}>
                      <Clock size={12} aria-hidden="true" />
                      {article.readTime} min read
                    </span>
                  </div>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className={styles.cardCta}>
                      <BookOpen size={13} aria-hidden="true" />
                      Read overview
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.disclaimer}>
              <p>
                <strong>Disclaimer:</strong> All research overviews on this page summarize publicly available
                preclinical literature. They are provided for educational purposes for investigators and researchers.
                No content on this site constitutes medical advice, clinical guidance, or recommendations for human use.
                All compounds are for laboratory research use only.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
