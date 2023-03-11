const botones = document.querySelectorAll('.filter');
const cartas = document.querySelectorAll('.card');
botones.forEach((boton) => {
    boton.onclick = async (evento) => {
        const filterSeleccionada = boton.getAttribute('data-filter');
        for (const card of cartas) {
          if (card.querySelector(`.${filterSeleccionada}`) || filterSeleccionada === 'all') {
						card.classList.remove('oculta');
          } else {
						card.classList.add('oculta');
          }
        }
        await sleep(200);
        for (const card of cartas) {
          if (card.classList.contains('oculta')) {
						card.style.display = 'none';
          } else {
						card.style.display = 'flex';
          }
        }
    };
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let fondoCambiado = false;
let cambioFondo = document.querySelector('#tema');
cambioFondo.addEventListener('click', () => {
	if (!fondoCambiado) {
		document.body.style.backgroundImage = "url('../img/bgWhite.png')";
	} else {
		document.body.style.backgroundImage = "none";
	}
	fondoCambiado = !fondoCambiado;
});