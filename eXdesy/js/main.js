let typed = new Typed('#typed', {
    stringsElement: '#animatedText',
    typeSpeed: 100,
    startDelay: 500,
    backSpeed: 50,
    loop: true
});

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
