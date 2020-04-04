module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/blog",
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `shelob9`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Pollock`,
        short_name: `Josh`,
        start_url: `/`,
        background_color: `#585858`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/blog/*`],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Josh Pollock`,
    author: `Josh Pollock`,
    description: `Just another internet website.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/josh412`,
      },
      {
        name: `github`,
        url: `https://github.com/shelob9`,
      },
    ],
  },
}
