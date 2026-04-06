import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ChevronLeft, BookOpen } from 'lucide-react';
import { getArticleBySlug, articles, getProductBySlug } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Research Hub | Behemoth Labz`,
    description: article.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  sarms: 'var(--bl-color-sarms)',
  peptides: 'var(--bl-color-peptides)',
  nootropics: 'var(--bl-color-nootropics)',
  regulatory: 'var(--bl-color-reactor-400)',
  'multi-compound': 'var(--bl-color-reactor-500)',
};

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedProducts = (article.relatedProductSlugs ?? [])
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  const catColor = categoryColors[article.category] ?? 'var(--bl-color-reactor-400)';

  return (
    <div className={styles.page}>
      {/* Article header */}
      <div className={styles.pageHeader}>
        <div className="bl-container">
          <Link href="/research-hub" className={styles.backLink}>
            <ChevronLeft size={15} aria-hidden="true" />
            Research Hub
          </Link>
          <div className={styles.meta}>
            <span
              className={`bl-label ${styles.tag}`}
              style={{ color: catColor }}
            >
              {article.category}
            </span>
            <span className={styles.readTime}>
              <Clock size={12} aria-hidden="true" />
              {article.readTime} min read
            </span>
            <span className={styles.date}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <h1 className={styles.heading}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </div>
      </div>

      {/* Article body */}
      <div className="bl-container">
        <div className={styles.layout}>
          <article className={styles.article}>
            <div className={styles.researchBadge}>
              <BookOpen size={14} aria-hidden="true" />
              Preclinical Research Overview — For Educational Purposes Only
            </div>

            {article.body ? (
              article.body.map((section, i) => (
                <div key={i} className={styles.section}>
                  {section.heading && (
                    <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className={styles.paragraph}>{p}</p>
                  ))}
                </div>
              ))
            ) : (
              <p className={styles.paragraph}>{article.excerpt}</p>
            )}

            {/* Bottom disclaimer */}
            <div className={styles.articleDisclaimer}>
              <p>
                <strong>Research Use Only.</strong> This overview summarizes publicly available preclinical literature
                for educational and research purposes. It does not constitute medical advice, clinical guidance,
                or imply safety or efficacy for human use. All compounds referenced are for laboratory research use only.
                Not for human consumption or administration.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {relatedProducts.length > 0 && (
              <div className={styles.sidebarCard}>
                <p className={`bl-label ${styles.sidebarCardLabel}`}>Research Compound</p>
                {relatedProducts.map((product) => product && (
                  <div key={product.id} className={styles.productRef}>
                    <p className={styles.productRefName}>{product.name}</p>
                    <p className={`bl-mono--sm ${styles.productRefCas}`}>{product.casNumber}</p>
                    <p className={styles.productRefPurity}>
                      <span className={styles.purityDot} />
                      {product.purity} purity
                    </p>
                    <Button variant="secondary" asChild>
                      <Link href={`/products/${product.slug}`}>View Compound →</Link>
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.sidebarCard}>
              <p className={`bl-label ${styles.sidebarCardLabel}`}>More Overviews</p>
              <ul className={styles.moreList}>
                {articles
                  .filter((a) => a.slug !== article.slug)
                  .map((a) => (
                    <li key={a.id}>
                      <Link href={`/research-hub/${a.slug}`} className={styles.moreLink}>
                        <span
                          className={`bl-label ${styles.moreTag}`}
                          style={{ color: categoryColors[a.category] ?? 'var(--bl-color-reactor-400)' }}
                        >
                          {a.category}
                        </span>
                        <span className={styles.moreTitle}>{a.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
