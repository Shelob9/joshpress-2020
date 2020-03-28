module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/blog",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Josh Pollock`,
    author: `Josh Pollock`,
    description: `My site description...`,
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
