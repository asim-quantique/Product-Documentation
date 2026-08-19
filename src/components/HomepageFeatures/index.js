import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    title: 'Claims Management Solution',
    description:
      'Documentation for claims management products and related solutions.',
    link: '/docs/products/claims-management-solution',
  },
  {
    title: 'Insure 360',
    description:
      'Product documentation, user guides, and technical resources for Insure 360.',
    link: '/docs/products/insure-360',
  },
  {
    title: 'InsurTech CRM 360',
    description:
      'Documentation for CRM workflows, features, and platform capabilities.',
    link: '/docs/products/insurtech-crm-360',
  },
  {
    title: 'NBFC Collab Model',
    description:
      'Documentation and resources for the NBFC Collab Model.',
    link: '/docs/products/nbfc-collab-model',
  },
  {
    title: 'Q Fleet',
    description:
      'Documentation for Q Fleet capabilities, functionality, and workflows.',
    link: '/docs/products/q-fleet',
  },
  {
    title: 'Q Admin',
    description:
      'Complete documentation for navigating and using the Quantique Q Admin Portal.',
    link: '/docs/q-admin',
  },
  {
    title: 'Transit Secure',
    description:
      'Documentation and resources for the Transit Secure solution.',
    link: '/docs/products/transit-secure',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((item, index) => (
            <div className="col col--4 col--6-tablet col--12-mobile"
  key={index}>
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