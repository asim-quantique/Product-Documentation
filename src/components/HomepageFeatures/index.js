import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
  title: 'Q Admin',
  description:
    'Complete user guide for navigating and using the Quantique Q Admin Portal.',
  link: '/docs/q-admin/user-guide',
},
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((item, index) => (
            <div className="col col--4" key={index}>
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