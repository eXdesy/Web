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


const message = document.querySelector('#subject');
message.addEventListener('blur', () => {
    if (message.value.trim() === '') {
    message.style.border = '2px solid red';

    let errorText = message.parentNode.querySelector('span');
    if (!errorText) {
        errorText = document.createElement('span');
        errorText.style.color = 'red';
        message.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'You didn\'t enter your message!';
    } else {
    message.style.border = '2px solid green';
    const errorText = message.parentNode.querySelector('span');
    if (errorText) {
        errorText.remove();
    }
    }
});

const email = document.querySelector('#email');
email.addEventListener('blur', () => {
const ccRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
if (email.value.trim() === '' || !ccRegex.test(email.value.trim())) {
    email.style.border = '2px solid red';

    let errorText = email.parentNode.querySelector('span');
    if (!errorText) {
        errorText = document.createElement('span');
        errorText.style.color = 'red';
        email.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'You forgot enter your email!';
    } else {
    email.style.border = '2px solid green';

    const errorText = email.parentNode.querySelector('span');
    if (errorText) {
        errorText.remove();
    }
    }
});

const text = document.querySelector('#text');
text.addEventListener('blur', () => {
    if (text.value.trim() === '') {
    text.style.border = '2px solid red';

    let errorText = text.parentNode.querySelector('span');
    if (!errorText) {
        errorText = document.createElement('span');
        errorText.style.color = 'red';
        text.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'You forgot enter your name!';
    } else {
    text.style.border = '2px solid green';
    const errorText = text.parentNode.querySelector('span');
    if (errorText) {
        errorText.remove();
    }
    }
});
