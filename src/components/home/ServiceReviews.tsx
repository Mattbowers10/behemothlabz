import { serviceReviews } from '@/lib/data';
import styles from './ServiceReviews.module.css';

export function ServiceReviews() {
  return (
    <section className={`bl-section--sm ${styles.section}`} aria-labelledby="reviews-heading">
      <div className="bl-container">
        <p className={`bl-label ${styles.eyebrow}`}>Customer Feedback</p>
        <h2 id="reviews-heading" className={styles.heading}>
          What Researchers Are Saying
        </h2>
        <p className={styles.note}>
          Reviews reflect customer experience with shipping, service, and documentation — not product effects.
        </p>
        <div className={styles.grid} role="list">
          {serviceReviews.map((review) => (
            <article key={review.id} className={styles.card} role="listitem">
              <div
                className={styles.stars}
                aria-label={`${review.rating} out of 5 stars`}
              >
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <h3 className={styles.title}>&ldquo;{review.title}&rdquo;</h3>
              <p className={styles.body}>{review.body}</p>
              <div className={styles.footer}>
                <span className={styles.author}>{review.author}</span>
                {review.verified && (
                  <span className={styles.verified}>Verified Purchase</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
