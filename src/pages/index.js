import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

// 特性数据
const FeatureList = [
  {
    icon: '🚀',
    iconClass: 'featureIconRocket',
    title: translate({
      id: 'homepage.feature.quickStart.title',
      message: '快速开始',
    }),
    description: translate({
      id: 'homepage.feature.quickStart.description',
      message: '几分钟内即可启动 Wegent。学习基础知识并创建您的第一个 AI 智能体。',
    }),
    link: '/docs/getting-started/quick-start',
  },
  {
    icon: '🧠',
    iconClass: 'featureIconBrain',
    title: translate({
      id: 'homepage.feature.coreConcepts.title',
      message: '核心概念',
    }),
    description: translate({
      id: 'homepage.feature.coreConcepts.description',
      message: '深入理解 Ghost、Bot、Team、Skill 等核心概念，掌握多智能体协作的精髓。',
    }),
    link: '/docs/concepts/core-concepts',
  },
  {
    icon: '📚',
    iconClass: 'featureIconBook',
    title: translate({
      id: 'homepage.feature.guides.title',
      message: '使用指南',
    }),
    description: translate({
      id: 'homepage.feature.guides.description',
      message: '全面的指南帮助您创建和管理智能体、团队和任务，释放 AI 协作的无限可能。',
    }),
    link: '/docs/guides/user/creating-ghosts',
  },
];

// 统计数据
const StatsList = [
  {
    number: '10+',
    label: translate({
      id: 'homepage.stats.skills',
      message: '内置技能',
    }),
  },
  {
    number: '5+',
    label: translate({
      id: 'homepage.stats.models',
      message: '支持模型',
    }),
  },
  {
    number: '∞',
    label: translate({
      id: 'homepage.stats.agents',
      message: '智能体组合',
    }),
  },
  {
    number: '24/7',
    label: translate({
      id: 'homepage.stats.availability',
      message: '全天候服务',
    }),
  },
];

// Hero 区域组件
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* 装饰性背景元素 */}
      <div className={clsx(styles.heroDecoration, styles.heroOrb1)} />
      <div className={clsx(styles.heroDecoration, styles.heroOrb2)} />
      <div className={clsx(styles.heroDecoration, styles.heroOrb3)} />
      
      <div className={clsx('container', styles.heroContent)}>
        {/* 标语徽章 */}
        <div className={styles.heroTagline}>
          <span className={styles.heroTaglineIcon}>✨</span>
          <Translate id="homepage.taglineBadge">
            新一代 AI 多智能体协作平台
          </Translate>
        </div>
        
        {/* 主标题 */}
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          <span className={styles.heroTitleGradient}>{siteConfig.title}</span>
        </Heading>
        
        {/* 副标题 */}
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate id="homepage.tagline">
            构建、编排、部署智能体团队，让 AI 协作变得简单而强大
          </Translate>
        </p>
        
        {/* 按钮组 */}
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonPrimary)}
            to="/docs/getting-started/quick-start">
            <Translate id="homepage.getStarted">
              🚀 快速开始
            </Translate>
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonSecondary)}
            to="/docs/concepts/core-concepts">
            <Translate id="homepage.learnMore">
              📖 了解更多
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

// 特性卡片组件
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
        <Translate id="homepage.exploreMore">探索更多</Translate>
        <span className={styles.featureLinkArrow}>→</span>
      </Link>
    </div>
  );
}

// 特性展示区域
function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* 区域标题 */}
        <div className={styles.featuresTitle}>
          <Heading as="h2" className={styles.featuresTitleText}>
            <Translate id="homepage.features.title">
              为什么选择 Wegent？
            </Translate>
          </Heading>
          <p className={styles.featuresSubtitle}>
            <Translate id="homepage.features.subtitle">
              强大的功能，简洁的设计，无限的可能
            </Translate>
          </p>
        </div>
        
        {/* 特性卡片网格 */}
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 统计数据区域
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

// 资源链接区域
function HomepageLinks() {
  return (
    <section className={styles.links}>
      <div className="container">
        <Heading as="h2" className={styles.linksTitle}>
          <Translate id="homepage.resources.title">
            📦 资源与链接
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
              API 参考文档
            </Translate>
          </Link>
          <Link
            className={styles.linkButton}
            to="/docs/concepts/architecture">
            <span className={styles.linkButtonIcon}>🏗️</span>
            <Translate id="homepage.resources.architecture">
              系统架构
            </Translate>
          </Link>
          <Link
            className={styles.linkButton}
            to="/docs/faq">
            <span className={styles.linkButtonIcon}>❓</span>
            <Translate id="homepage.resources.faq">
              常见问题
            </Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA 区域
function HomepageCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <Heading as="h2" className={styles.ctaTitle}>
          <Translate id="homepage.cta.title">
            准备好开始了吗？
          </Translate>
        </Heading>
        <p className={styles.ctaDescription}>
          <Translate id="homepage.cta.description">
            加入 Wegent 社区，探索 AI 多智能体协作的无限可能。从今天开始构建您的智能体团队！
          </Translate>
        </p>
        <Link
          className={styles.ctaButton}
          to="/docs/getting-started/installation">
          <Translate id="homepage.cta.button">
            立即安装 Wegent
          </Translate>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

// 主页组件
export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: '首页',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Wegent - AI 驱动的多智能体协作平台',
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
