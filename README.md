# Wegent Documentation

This is the official documentation website for [Wegent](https://github.com/wecode-ai/Wegent), an AI-powered multi-agent collaboration platform.

**Live Site**: [https://wecode-ai.github.io/wegent-docs/](https://wecode-ai.github.io/wegent-docs/)

## Features

- **Multi-language Support**: English and Chinese (中文)
- **Full-text Search**: Powered by docusaurus-search-local with Chinese language support
- **Dark/Light Theme**: Automatic theme switching based on system preference
- **Responsive Design**: Works on desktop and mobile devices

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm start
```

This starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting.

### Build

```bash
npm run build
```

This generates static content into the `build` directory.

### Serve Built Site

```bash
npm run serve
```

## Project Structure

```
wegent-docs/
├── docs/                    # English documentation (default)
├── i18n/zh/                 # Chinese translations
│   ├── docusaurus-plugin-content-docs/
│   │   └── current/         # Chinese documentation
│   └── docusaurus-theme-classic/
├── src/
│   ├── css/                 # Global styles
│   └── pages/               # Custom pages (homepage)
├── static/                  # Static assets
├── docusaurus.config.js     # Docusaurus configuration
├── sidebars.js             # Sidebar configuration
└── package.json
```

## Documentation Sync

The documentation in this repository is automatically synced from the main [Wegent repository](https://github.com/wecode-ai/Wegent). When changes are made to `docs/` in the main repo, they are automatically synchronized here via GitHub Actions.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For documentation content changes, please submit PRs to the [main Wegent repository](https://github.com/wecode-ai/Wegent).

## License

MIT License - see [LICENSE](LICENSE) for details.
