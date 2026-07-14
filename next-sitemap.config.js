/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nutricalgaro.com.ar",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
