module.exports = {
  base: "/starter-theme/",
  title: "Starter Theme",
  docsDir: 'docs',
  description: "Wordpress Theme for TLH Marketing Sites",
  themeConfig: {
    repo: 'thelearninghouse/starter-theme',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'thelearninghouse/starter-theme',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    editLinks: true,
    docsDir: ".DOCUMENTATION",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/" },
      { text: "FAQ", link: "/faq/" }
    ]
  },
  // dest: '../../../docs'
};
