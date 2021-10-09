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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-QC3ZXX41C6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
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
