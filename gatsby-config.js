/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: "Yasmika Saubhagya",
    titleTemplate: "%s · Full Stack Developer",
    description:
      "I develop software applications using popular technology stacks.",
    url: "https://www.yasmikash.com",
    image: "/yasmikash.jpg",
    twitterUsername: "@yasmikash",
    keywords:
      "yasmikash, full-stack, web development, sliit, itelasoft, sri lanka, software engineer, reactjs, nodejs, expressjs, flutter, backend development, frontend development, mobile development",
  },
};
