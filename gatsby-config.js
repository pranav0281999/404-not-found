module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "404-not-found",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Space Mono', 'Montserrat']
        }
      }
    }
  ],
};
