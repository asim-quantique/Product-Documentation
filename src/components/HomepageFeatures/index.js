import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    title: 'User Guides',
    description: 'Complete user manuals for all Quantique products.',
    link: '/docs/category/user-guides',
  },
  {
    title: 'API Documentation',
    description: 'REST APIs, authentication and integration guides.',
    link: '/docs/category/api',
  },
  {
    title: 'Technical Documentation',
    description: 'Architecture, workflows and technical implementation.',
    link: '/docs/category/technical',
  },
  {
    title: 'Release Notes',
    description: 'Latest product updates and release history.',
    link: '/docs/category/release-notes',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((item, index) => (
            <div className="col col--3" key={index}>
              <div className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.link}>Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}