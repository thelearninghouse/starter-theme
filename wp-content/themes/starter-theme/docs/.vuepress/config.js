module.exports = {
  base: "/starter-theme/",
  title: "Starter Theme",
  docsDir: 'docs',
  description: "Wordpress Theme for TLH Marketing Sites",
  themeConfig: {
    repo: 'thelearninghouse/starter-theme',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github Repo',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'thelearninghouse/starter-theme',
    // if your docs are not at the root of the repo:
    docsDir: 'wp-content/themes/starter-theme/docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    editLinks: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/" },
      { text: "Theme Features", link: "/theme-features/" },
      { text: "Launch LP's", link: "/launch-lps/" },
      { text: "FAQ", link: "/faq/" }

    ]
  },
  // dest: '../../../docs'
};
