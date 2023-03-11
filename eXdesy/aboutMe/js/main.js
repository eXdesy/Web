gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: 'header',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.leftContent .item')
	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.rightContent .item')
	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}

let fondoCambiado = false;
let cambioFondo = document.querySelector('#tema');
cambioFondo.addEventListener('click', () => {
  if (!fondoCambiado) {
    document.body.style.backgroundImage = "url('../img/bgWhite.png')";
  } else {
    document.body.style.backgroundImage;
  }
  fondoCambiado = !fondoCambiado;
});
