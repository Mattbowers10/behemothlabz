import styles from './AnnouncementBar.module.css';

const messages = [
  'Free Shipping on orders $100+',
  'USA-Made. Third-Party Tested.',
  'New COAs published — view library',
];

// Static for now — can be made dynamic with server data later
export function AnnouncementBar() {
  return (
    <div className={styles.bar} role="banner" aria-label="Site announcements">
      <div className={`bl-container ${styles.inner}`}>
        <ul className={styles.list} aria-label="Announcements">
          {messages.map((msg) => (
            <li key={msg} className={styles.item}>
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
