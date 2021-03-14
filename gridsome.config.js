// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const rucksackCss = require("rucksack-css");

const postcssPlugins = [rucksackCss];

module.exports = {
  siteName: "Germaine P",
  siteUrl: "https://germainep.com",
  titleTemplate: "%s - Germaine P",
  plugins: [
    { use: "@gridsome/plugin-sitemap" },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content/blog",
        typeName: "BlogPost",
        pathPrefix: "/blog",
        path: "/:title",
        remark: {},
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Project",
        baseDir: "./content/projects",
        route: "/project/:title",
      },
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900,
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        host: "https://www.germainep.com",
        sitemap: "https://www.germainep.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",

      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: true,
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  templates: {
    Project: [
      {
        path: "/project/:title",
        component: "./src/templates/Project.vue",
      },
    ],
    BlogPost: [
      {
        path: "/blog/:slug",
        component: "./src/templates/Blog.vue",
      },
    ],
  },
};
