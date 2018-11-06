module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: "markdown-pages",
      },
    },
  ],
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
}
