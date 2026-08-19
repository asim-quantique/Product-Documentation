import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const products = [
  {
    title: 'Claims Management Solution',
    description:
      'Documentation for claims management products, workflows, and business processes.',
    available: false,
  },
  {
    title: 'DMS 360',
    description:
      'Documentation for DMS 360 features, workflows, and operations.',
    available: false,
  },
  {
    title: 'Extended Warranty',
    description:
      'Documentation for Extended Warranty processes, workflows, and operations.',
    available: false,
  },
  {
    title: 'Insurance Prediction Model',
    description:
      'Documentation for insurance prediction models, capabilities, and processes.',
    available: false,
  },
  {
    title: 'Insure 360',
    description:
      'User guides, workflows, and technical documentation for Insure 360.',
    available: false,
  },
  {
    title: 'InsurTech CRM 360',
    description:
      'Documentation for CRM workflows, features, configuration, and operations.',
    available: false,
  },
  {
    title: 'NBFC Collab Model',
    description:
      'Documentation for NBFC collaboration workflows, processes, and integrations.',
    available: false,
  },
  {
    title: 'Q Fleet',
    description:
      'Documentation for Q Fleet capabilities, functionality, and workflows.',
    available: false,
  },
  {
    title: 'Q Admin',
    description:
      'Complete documentation for navigating and using the Quantique Q Admin Portal.',
    link: '/docs/q-admin/user-guide',
    available: true,
  },
  {
    title: 'Transit Secure',
    description:
      'Documentation for Transit Secure features, workflows, and operations.',
    available: false,
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>

          <div className={styles.heroLabel}>
            QUANTIQUE METADATA
          </div>

          <Heading as="h1" className={styles.heroTitle}>
            Quantique Documentation
          </Heading>

          <p className={styles.heroSubtitle}>
            Product guides, technical documentation, API references,
            integration guides, and resources for Quantique products.
          </p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button',
                'button--primary',
                'button--lg',
                styles.primaryButton
              )}
              to="#products"
            >
              Explore Products
            </Link>

            <Link
              className={clsx(
                'button',
                'button--outline',
                'button--lg',
                styles.secondaryButton
              )}
              to="/docs/q-admin/user-guide"
            >
              Browse All Documentation
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

function ProductCard({ title, description, link, available }) {
  return (
    <div className={styles.productCard}>

      <div className={styles.productContent}>
        <Heading as="h3">
          {title}
        </Heading>

        <p>
          {description}
        </p>
      </div>

      {available ? (
        <Link
          className={styles.productLink}
          to={link}
        >
          View Documentation →
        </Link>
      ) : (
        <span className={styles.comingSoon}>
          Documentation Coming Soon
        </span>
      )}

    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Documentation"
      description="Quantique Metadata Documentation"
    >

      <HomepageHeader />

      <main>

        {/* Products Section */}
        <section
          id="products"
          className={styles.productsSection}
        >
          <div className="container">

            <div className={styles.sectionHeading}>
              <Heading as="h2">
                Explore Our Products
              </Heading>

              <p>
                Select a product to access user guides, technical
                documentation, references, SOPs, troubleshooting guides,
                and release notes.
              </p>
            </div>

            <div className={styles.productGrid}>

              {products.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  link={product.link}
                  available={product.available}
                />
              ))}

            </div>

          </div>
        </section>

        {/* Documentation Types */}
        <section className={styles.docTypesSection}>
          <div className="container">

            <div className={styles.sectionHeading}>
              <Heading as="h2">
                Documentation Resources
              </Heading>

              <p>
                Find the type of documentation you need.
              </p>
            </div>

            <div className={styles.docTypesGrid}>

              <div className={styles.docType}>
                <Heading as="h3">
                  User Guides
                </Heading>

                <p>
                  Step-by-step instructions for using Quantique products.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Developer Documentation
                </Heading>

                <p>
                  Technical information and resources for developers.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Integration Documentation
                </Heading>

                <p>
                  Integration procedures, configurations, and API resources.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Reference
                </Heading>

                <p>
                  Technical references, configurations, and detailed information.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  SOPs
                </Heading>

                <p>
                  Standard operating procedures and operational guidance.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Troubleshooting
                </Heading>

                <p>
                  Solutions for common issues and operational problems.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Release Notes
                </Heading>

                <p>
                  Product updates, enhancements, fixes, and new features.
                </p>
              </div>

              <div className={styles.docType}>
                <Heading as="h3">
                  Overview
                </Heading>

                <p>
                  Product overviews, capabilities, and key information.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

    </Layout>
  );
}
