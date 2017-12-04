module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Andrew Smith", // Site title.
  siteTitleAlt: "Professional profile of Andrew Smith", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://andrew.codes", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A professional profile, resume, and blog of Andrew Smith.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBInsightsID: "1488033381245877", // FB Application ID for using app insights
  googleAnalyticsID: "UA-45622906-3", // GA tracking ID.
  disqusShortname: "andrew-codes", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Andrew Smith", // Username to display in the author segment.
  userTwitter: "andrew_codes", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Atlanta, GA", // User location to display in the author segment.
  userAvatar:
    "https://www.gravatar.com/avatar/9c3d77fcdf0f8df38f39c6ef5b4cf47b", // User avatar to display in the author segment.
  userDescription: "developer, speaker, OSS contributor; lifelong learner", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/andrew_codes",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "GitHub",
      url: "https://github.com/andrew-codes",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/jamesandrewsmith",
      iconClassName: "fa fa-linkedin"
    }
  ],
  copyright: "Copyright © 2017. Andrew Smith", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
