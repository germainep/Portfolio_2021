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
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Tag",
        baseDir: "./content/Tags",
        pathPrefix: "/tags",
        route: "/:id",
        template: "./src/templates/Tag.vue",
      },
    },

    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Picture",
        baseDir: "./content/images",
        pathPrefix: "/images",
        route: "/:id",
        template: "./src/templates/Picture.vue",
      },
    },

    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Project",
        baseDir: "./content/Projects",
        route: "/project/:title",
        template: "./src/templates/Project.vue",
        refs: {
          tags: "Tag",
          pictures: "Picture",
        },
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "BlogPost",
        baseDir: "./content/BlogPosts",
        route: "/blog/:slug",
        template: "./src/templates/BlogPost.vue",
        plugins: ["remark-prism"],
        refs: {
          tags: "Tag",
          pictures: "Picture",
        },
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
};
