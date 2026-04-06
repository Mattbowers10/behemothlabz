import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { articles } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import styles from './ResearchHubTeaser.module.css';

const categoryColors: Record<string, string> = {
  sarms: 'var(--bl-color-sarms)',
  peptides: 'var(--bl-color-peptides)',
  nootropics: 'var(--bl-color-nootropics)',
  regulatory: 'var(--bl-color-reactor-400)',
};

export function ResearchHubTeaser() {
  return (
    <section className={`bl-section--sm ${styles.section}`} aria-labelledby="hub-heading">
      <div className="bl-container">
        <div className={styles.header}>
          <div>
            <p className={`bl-label bl-label-line ${styles.eyebrow}`}>Research Hub</p>
            <h2 id="hub-heading" className={styles.heading}>
              Mechanism-of-Action Overviews
            </h2>
            <p className={styles.subhead}>
              Peer-reviewed summaries and preclinical research overviews for investigators.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/research-hub">Browse All Articles →</Link>
          </Button>
        </div>

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
                  <BookOpen size={12} aria-hidden="true" />
                  {article.readTime} min read
                </span>
              </div>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <span className={styles.cta} aria-hidden="true">Read overview →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
