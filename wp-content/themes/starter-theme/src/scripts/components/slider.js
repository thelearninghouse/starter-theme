import Config from "themeConfig";
import Glide from '@glidejs/glide'

const Slider = new Glide(Config.selectors.slider, {
  type: 'carousel',
  focusAt: 'center',
  perView: 3,
  breakpoints: {
    1024: {
      perView: 2
    },
    450: {
      perView: 1
    }
  }
})

Slider.mount()
