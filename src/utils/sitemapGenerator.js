const fs = require('fs');
const prettier = require('prettier');

const sitemapGenerator = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const basePath = 'https://thediceroll.github.io';

  const defaultPages = [
    '/',
    '/preset',
    '/custom',
  ];

  const ruleSet = [];

  const defaultPagesRuleSet = defaultPages.map((url) => `
    <url>
      <loc>${basePath}${url}</loc>
      <changefreq>daily</changefreq>
      <priority>1</priority>
    </url>
  `).join('');

  ruleSet.push(defaultPagesRuleSet);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${ruleSet.join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
};

sitemapGenerator();

module.exports = sitemapGenerator;
