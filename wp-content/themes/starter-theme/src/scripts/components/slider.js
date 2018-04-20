import Glide from '@glidejs/glide'
// Required Core Stylesheet

const Slider = new Glide('.glide', {
  type: 'carousel',
  focusAt: 'center',
  perView: 3,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}).mount()
console.log(Slider);
