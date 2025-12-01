import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">
            AI-Powered Multi-Agent Collaboration Platform
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/quick-start">
            <Translate id="homepage.getStarted">
              Get Started
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={link}>
          <Translate id="homepage.learnMore">Learn More</Translate>
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title={translate({
              id: 'homepage.feature.quickStart.title',
              message: 'Quick Start',
            })}
            description={translate({
              id: 'homepage.feature.quickStart.description',
              message: 'Get up and running with Wegent in minutes. Learn the basics and create your first AI agent.',
            })}
            link="/docs/getting-started/quick-start"
          />
          <Feature
            title={translate({
              id: 'homepage.feature.coreConcepts.title',
              message: 'Core Concepts',
            })}
            description={translate({
              id: 'homepage.feature.coreConcepts.description',
              message: 'Understand the fundamental concepts of Ghosts, Bots, Teams, Skills, and more.',
            })}
            link="/docs/concepts/core-concepts"
          />
          <Feature
            title={translate({
              id: 'homepage.feature.guides.title',
              message: 'User Guides',
            })}
            description={translate({
              id: 'homepage.feature.guides.description',
              message: 'Comprehensive guides for creating and managing agents, teams, and tasks.',
            })}
            link="/docs/guides/user/creating-ghosts"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Home',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Wegent - AI-Powered Multi-Agent Collaboration Platform',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.links}>
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <Heading as="h2">
                  <Translate id="homepage.resources.title">
                    Resources
                  </Translate>
                </Heading>
                <div className={styles.linkButtons}>
                  <Link
                    className="button button--outline button--primary button--lg margin--sm"
                    href="https://github.com/wecode-ai/Wegent">
                    GitHub Repository
                  </Link>
                  <Link
                    className="button button--outline button--primary button--lg margin--sm"
                    to="/docs/reference/yaml-specification">
                    <Translate id="homepage.resources.apiReference">
                      API Reference
                    </Translate>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
