import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

// Feature data
const FeatureList = [
  {
    icon: '🚀',
    iconClass: 'featureIconRocket',
    title: translate({
      id: 'homepage.feature.quickStart.title',
      message: 'Quick Start',
    }),
    description: translate({
      id: 'homepage.feature.quickStart.description',
      message: 'Get started with Wegent in minutes. Learn the basics and create your first AI agent.',
    }),
    link: '/docs/getting-started/quick-start',
  },
  {
    icon: '🧠',
    iconClass: 'featureIconBrain',
    title: translate({
      id: 'homepage.feature.coreConcepts.title',
      message: 'Core Concepts',
    }),
    description: translate({
      id: 'homepage.feature.coreConcepts.description',
      message: 'Understand Ghost, Bot, Team, Skill and other core concepts to master multi-agent collaboration.',
    }),
    link: '/docs/concepts/core-concepts',
  },
  {
    icon: '📚',
    iconClass: 'featureIconBook',
    title: translate({
      id: 'homepage.feature.guides.title',
      message: 'User Guides',
    }),
    description: translate({
      id: 'homepage.feature.guides.description',
      message: 'Comprehensive guides to help you create and manage agents, teams, and tasks for unlimited AI collaboration.',
    }),
    link: '/docs/guides/user/creating-ghosts',
  },
];

// Statistics data
const StatsList = [
  {
    number: '10+',
    label: translate({
      id: 'homepage.stats.skills',
      message: 'Built-in Skills',
    }),
  },
  {
    number: '5+',
    label: translate({
      id: 'homepage.stats.models',
      message: 'Supported Models',
    }),
  },
  {
    number: '∞',
    label: translate({
      id: 'homepage.stats.agents',
      message: 'Agent Combinations',
    }),
  },
  {
    number: '7*24',
    label: translate({
      id: 'homepage.stats.availability',
      message: 'Always Available',
    }),
  },
];

// Hero section component
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* Decorative background elements */}
      <div className={clsx(styles.heroDecoration, styles.heroOrb1)} />
      <div className={clsx(styles.heroDecoration, styles.heroOrb2)} />
      <div className={clsx(styles.heroDecoration, styles.heroOrb3)} />
      
      <div className={clsx('container', styles.heroContent)}>
        {/* Tagline badge */}
        <div className={styles.heroTagline}>
          <span className={styles.heroTaglineIcon}>✨</span>
          <Translate id="homepage.taglineBadge">
            Next-Generation AI Multi-Agent Collaboration Platform
          </Translate>
        </div>
        
        {/* Main title */}
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          <span className={styles.heroTitleGradient}>{siteConfig.title}</span>
        </Heading>
        
        {/* Subtitle */}
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate id="homepage.tagline">
            Build, orchestrate, and deploy agent teams - making AI collaboration simple and powerful
          </Translate>
        </p>
        
        {/* Button group */}
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonPrimary)}
            to="/docs/getting-started/quick-start">
            <Translate id="homepage.getStarted">
              🚀 Get Started
            </Translate>
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonSecondary)}
            to="/docs/concepts/core-concepts">
            <Translate id="homepage.learnMore">
              📖 Learn More
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

// Feature card component
function FeatureCard({icon, iconClass, title, description, link}) {
  return (
    <div className={styles.featureCard}>
      <div className={clsx(styles.featureIcon, styles[iconClass])}>
        {icon}
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
      <Link className={styles.featureLink} to={link}>
        <Translate id="homepage.exploreMore">Explore More</Translate>
        <span className={styles.featureLinkArrow}>→</span>
      </Link>
    </div>
  );
}

// Features section
function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Section title */}
        <div className={styles.featuresTitle}>
          <Heading as="h2" className={styles.featuresTitleText}>
            <Translate id="homepage.features.title">
              Why Choose Wegent?
            </Translate>
          </Heading>
          <p className={styles.featuresSubtitle}>
            <Translate id="homepage.features.subtitle">
              Powerful features, elegant design, unlimited possibilities
            </Translate>
          </p>
        </div>
        
        {/* Feature cards grid */}
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Statistics section
function HomepageStats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsGrid}>
        {StatsList.map((stat, idx) => (
          <div key={idx} className={styles.statItem}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Resources links section
function HomepageLinks() {
  return (
    <section className={styles.links}>
      <div className="container">
        <Heading as="h2" className={styles.linksTitle}>
          <Translate id="homepage.resources.title">
            📦 Resources & Links
          </Translate>
        </Heading>
        <div className={styles.linkButtons}>
          <Link
            className={styles.linkButton}
            href="https://github.com/wecode-ai/Wegent">
            <span className={styles.linkButtonIcon}>⭐</span>
            GitHub Repository
          </Link>
          <Link
            className={styles.linkButton}
            to="/docs/reference/yaml-specification">
            <span className={styles.linkButtonIcon}>📋</span>
            <Translate id="homepage.resources.apiReference">
              API Reference
            </Translate>
          </Link>
          <Link
            className={styles.linkButton}
            to="/docs/concepts/architecture">
            <span className={styles.linkButtonIcon}>🏗️</span>
            <Translate id="homepage.resources.architecture">
              Architecture
            </Translate>
          </Link>
          <Link
            className={styles.linkButton}
            to="/docs/faq">
            <span className={styles.linkButtonIcon}>❓</span>
            <Translate id="homepage.resources.faq">
              FAQ
            </Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA section
function HomepageCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <Heading as="h2" className={styles.ctaTitle}>
          <Translate id="homepage.cta.title">
            Ready to Get Started?
          </Translate>
        </Heading>
        <p className={styles.ctaDescription}>
          <Translate id="homepage.cta.description">
            Join the Wegent community and explore the unlimited possibilities of AI multi-agent collaboration. Start building your agent team today!
          </Translate>
        </p>
        <Link
          className={styles.ctaButton}
          to="/docs/getting-started/installation">
          <Translate id="homepage.cta.button">
            Install Wegent Now
          </Translate>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

// Homepage component
export default function Home() {
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
        <HomepageStats />
        <HomepageLinks />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
