import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  ArrowRight,
  Books,
  Browser,
  Cloud,
  Code,
  Desktop,
  Devices,
  FolderOpen,
  GithubLogo,
  HardDrives,
  ListChecks,
  Monitor,
  PuzzlePiece,
  Robot,
  TerminalWindow,
  UsersThree,
} from '@phosphor-icons/react';

import styles from './index.module.css';

const t = (id, message) => translate({id, message});

const cloudResources = [
  {
    icon: HardDrives,
    label: t('homepage.cloud.models', 'Server models'),
  },
  {
    icon: Cloud,
    label: t('homepage.cloud.devices', 'Cloud devices'),
  },
  {
    icon: Devices,
    label: t('homepage.cloud.remoteDevices', 'Remote devices'),
  },
];

const productChoices = [
  {
    name: 'Wegent',
    icon: Robot,
    title: t('homepage.choice.wegent.title', 'Build and operate agent teams'),
    description: t(
      'homepage.choice.wegent.description',
      'Define roles and tools, manage tasks, knowledge, integrations, and execution.',
    ),
  },
  {
    name: 'Wework',
    icon: Desktop,
    title: t('homepage.choice.wework.title', 'Work directly on projects'),
    description: t(
      'homepage.choice.wework.description',
      'Open a folder, collaborate with Codex, and use files, terminals, browser, plugins, and Skills.',
    ),
  },
];

const docProducts = [
  {
    name: 'Wegent',
    icon: Robot,
    href: '/docs/wegent',
    description: t(
      'homepage.docs.wegent.description',
      'Build and operate agent teams on the web.',
    ),
    items: [
      {
        icon: Code,
        title: t('homepage.docs.quickStart', 'Quick start'),
        description: t(
          'homepage.docs.wegent.quickStart.description',
          'Install Wegent and run your first agent team.',
        ),
        href: '/docs/wegent/getting-started/quick-start',
      },
      {
        icon: UsersThree,
        title: t('homepage.docs.agents', 'Agents and teams'),
        description: t(
          'homepage.docs.agents.description',
          'Define agents, roles, tools, and collaboration.',
        ),
        href: '/docs/wegent/user-guide/settings/agent-settings',
      },
      {
        icon: ListChecks,
        title: t('homepage.docs.tasks', 'Tasks'),
        description: t(
          'homepage.docs.tasks.description',
          'Create, assign, and follow work across your teams.',
        ),
        href: '/docs/wegent/user-guide/chat/managing-tasks',
      },
      {
        icon: Books,
        title: t('homepage.docs.knowledge', 'Knowledge and integrations'),
        description: t(
          'homepage.docs.knowledge.description',
          'Connect knowledge sources and the tools your agents use.',
        ),
        href: '/docs/wegent/user-guide/knowledge/knowledge-base-guide',
      },
    ],
  },
  {
    name: 'Wework',
    icon: Desktop,
    href: '/docs/wework',
    description: t(
      'homepage.docs.wework.description',
      'Work on local projects with AI on your desktop.',
    ),
    items: [
      {
        icon: Monitor,
        title: t('homepage.docs.quickStart', 'Quick start'),
        description: t(
          'homepage.docs.wework.quickStart.description',
          'Set up Wework and open your first project.',
        ),
        href: '/docs/wework/getting-started',
      },
      {
        icon: FolderOpen,
        title: t('homepage.docs.projects', 'Projects'),
        description: t(
          'homepage.docs.projects.description',
          'Organize local folders, Git projects, and workspaces.',
        ),
        href: '/docs/wework/projects',
      },
      {
        icon: TerminalWindow,
        title: t('homepage.docs.workbench', 'Coding workbench'),
        description: t(
          'homepage.docs.workbench.description',
          'Review files, terminals, commands, and code changes.',
        ),
        href: '/docs/wework/workbench',
      },
      {
        icon: Browser,
        title: t('homepage.docs.browserDevices', 'Browser and devices'),
        description: t(
          'homepage.docs.browserDevices.description',
          'Browse the web and choose where your work runs.',
        ),
        href: '/docs/wework/browser',
      },
    ],
  },
];

function ProductMark({product, icon: Icon}) {
  const wegentLogo = useBaseUrl('/img/wegent.png');
  return (
    <div className={styles.productMark} aria-hidden="true">
      {product === 'Wegent' ? (
        <img src={wegentLogo} alt="" />
      ) : (
        <Icon size={30} weight="duotone" />
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}>
          {t('homepage.eyebrow', 'AI work, your way.')}
        </span>
        <Heading as="h1" className={styles.heroTitle}>
          {t('homepage.hero.title', 'Build, create, and get work done with AI.')}
        </Heading>
        <p className={styles.heroDescription}>
          {t(
            'homepage.hero.description',
            'Wegent runs agent teams and platform workflows. Wework brings AI into local projects, with optional access to models and devices managed by Wegent.',
          )}
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.outlineButton} to="/docs/wegent">
            <Robot size={20} weight="duotone" aria-hidden="true" />
            {t('homepage.hero.wegentCta', 'Explore Wegent docs')}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className={styles.outlineButton} to="/docs/wework">
            <Desktop size={20} weight="duotone" aria-hidden="true" />
            {t('homepage.hero.weworkCta', 'Explore Wework docs')}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className={styles.relationship} aria-label={t('homepage.cloud.title', 'Optional cloud connection')}>
        <div className={styles.productNode}>
          <ProductMark product="Wegent" icon={Robot} />
          <strong>Wegent</strong>
          <span>{t('homepage.relationship.wegent', 'Agent teams and platform workflows')}</span>
        </div>
        <div className={styles.resourceColumn}>
          <span className={styles.resourceTitle}>
            {t('homepage.cloud.title', 'Optional cloud connection')}
          </span>
          {cloudResources.map(({icon: Icon, label}) => (
            <div className={styles.resourceRow} key={label}>
              <Icon size={21} weight="duotone" aria-hidden="true" />
              <span>{label}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className={styles.productNode}>
          <ProductMark product="Wework" icon={Desktop} />
          <strong>Wework</strong>
          <span>{t('homepage.relationship.wework', 'Local-first desktop AI workbench')}</span>
        </div>
        <p className={styles.localNote}>
          {t('homepage.relationship.localNote', 'Wework remains fully usable locally.')}
        </p>
      </div>
    </section>
  );
}

function ProductChooser() {
  return (
    <section className={styles.chooser}>
      <Heading as="h2" className={styles.sectionTitle}>
        {t('homepage.choice.title', 'Choose the product that fits the work')}
      </Heading>
      <div className={styles.choiceGrid}>
        {productChoices.map(({name, icon: Icon, title, description}) => (
          <div className={styles.choice} key={name}>
            <ProductMark product={name} icon={Icon} />
            <div>
              <span className={styles.choiceProduct}>{name}</span>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
          </div>
        ))}
        <div className={styles.cloudChoice}>
          <Cloud size={42} weight="duotone" aria-hidden="true" />
          <div>
            <strong>{t('homepage.choice.cloud.title', 'Need cloud resources in Wework?')}</strong>
            <p>{t('homepage.choice.cloud.description', 'Connect a Wegent Backend when needed.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentationPanel({product}) {
  const {name, icon, href, description, items} = product;
  return (
    <section className={styles.docsPanel}>
      <Link className={styles.docsHeader} to={href}>
        <ProductMark product={name} icon={icon} />
        <div>
          <Heading as="h2">{name} Documentation</Heading>
          <p>{description}</p>
        </div>
        <ArrowRight size={20} aria-hidden="true" />
      </Link>
      <div className={styles.docsLinks}>
        {items.map(({icon: Icon, title, description: itemDescription, href: itemHref}) => (
          <Link className={styles.docLink} to={itemHref} key={`${name}-${title}`}>
            <Icon size={25} weight="duotone" aria-hidden="true" />
            <strong>{title}</strong>
            <span>{itemDescription}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <Link className={styles.openSource} href="https://github.com/wecode-ai/Wegent">
      <GithubLogo size={34} weight="fill" aria-hidden="true" />
      <div>
        <strong>{t('homepage.openSource.title', 'Open source on GitHub')}</strong>
        <span>
          {t(
            'homepage.openSource.description',
            'Explore the source, contribute, and help improve Wegent and Wework.',
          )}
        </span>
      </div>
      <span className={styles.openSourceAction}>
        {t('homepage.openSource.cta', 'View organization')}
        <ArrowRight size={17} aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title={t('homepage.title', 'Documentation')}
      description={t(
        'homepage.description',
        'Documentation for Wegent agent teams and the Wework desktop AI workbench.',
      )}>
      <main className={styles.homepage}>
        <Hero />
        <ProductChooser />
        <div className={styles.docsGrid}>
          {docProducts.map((product) => (
            <DocumentationPanel product={product} key={product.name} />
          ))}
        </div>
        <OpenSource />
      </main>
    </Layout>
  );
}
