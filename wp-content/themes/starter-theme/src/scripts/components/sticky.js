import Config from "themeConfig";
import sticky from 'stickybits'

const stickyOptions = {
	stickyBitStickyOffset: 0
}

sticky(Config.selectors.sticky, stickyOptions)
