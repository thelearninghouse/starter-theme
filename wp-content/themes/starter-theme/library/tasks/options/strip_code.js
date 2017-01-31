module.exports = {
	options: {
		blocks: [
			{
				start_block: "<!-- dev-only -->",
				end_block: "<!-- end-dev-only -->"
			}
		]
	},
	your_target: {
		 src: ['../footer.php', '../footer-lp.php']
	}
}
