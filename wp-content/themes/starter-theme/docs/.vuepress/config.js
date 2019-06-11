module.exports = {
	base: "/starter-theme/",
	title: "Starter Theme",
	docsDir: "docs",
	description: "Wordpress Theme for TLH Marketing Sites",
	themeConfig: {
		repo: "thelearninghouse/starter-theme",
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: "Github Repo",
		// Optional options for generating "Edit this page" link
		// if your docs are in a different repo from your main project:
		docsRepo: "thelearninghouse/starter-theme",
		// if your docs are not at the root of the repo:
		docsDir: "wp-content/themes/starter-theme/docs",
		lastUpdated: true,
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: "master",
		editLinks: true,
		nav: [
			{
				text: "Overview",
				items: [
					{ text: "Getting Started", link: "/getting-started/" },
					{ text: "Important Files", link: "/important-files/" },
					{ text: "Naming Conventions", link: "/naming-conventions/" }
				]
			},
			{
				text: "Guides",
				items: [
					{ text: "Migrating Data", link: "/migrating-data/" },
					{ text: "Launch LP's", link: "/launch-lps/" },
					{ text: "Editing Docs", link: "/documentation/" }
				]
			},
			{ text: "Theme Features", link: "/theme-features/" },
			{ text: "Functions", link: "/functions/" },
			{ text: "FAQ", link: "/faq/" }
		],
		sidebar: {
			"/functions/": [
				{
					title: "Functions",
					collapsable: false,
					children: [
						"accordion",
						"byline",
						"field",
						"icon",
						"next-start-date",
						"phone-link",
						"responsive-bg-style",
						"social-share-buttons"
					]
				}
			],
			"/": [""]
		}
	}
	// dest: '../../../docs'
};
