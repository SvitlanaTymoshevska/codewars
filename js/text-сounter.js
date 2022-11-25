const refs = {
    openButton: document.querySelector('.open-button'),
    closeButton: document.querySelector('.close-button'),
    bakdrop: document.querySelector('.bakdrop'),
    textarea: document.querySelector('textarea'),
    textCounter: document.querySelector('.textarea-counter span'),
}

const textLimit = refs.textarea.getAttribute('maxlength');

refs.textCounter.innerHTML = textLimit;

refs.textarea.addEventListener('keyup', textSetCounter);
refs.textarea.addEventListener('keydown', (event) => { if (event.repeat) textSetCounter() });

refs.openButton.addEventListener('click', toggleShowForm);
refs.closeButton.addEventListener('click', toggleShowForm);
refs.bakdrop.addEventListener('click', (event) => { if (event.currentTarget === event.target) { toggleShowForm() } });

function textSetCounter () {
    const textCounterResult = textLimit - refs.textarea.value.length;
    refs.textCounter.innerHTML = textCounterResult;
}

function toggleShowForm () {
    refs.openButton.classList.toggle('is-hidden');
    refs.bakdrop.classList.toggle('is-hidden');
    if (!refs.bakdrop.classList.contains('is-hidden')) {
        window.addEventListener('keydown', onEscKeyDown); 
    } else {
        window.removeEventListener('keydown', onEscKeyDown); 
    };
    if (refs.textarea.value.length !== 0) {
        console.log(refs.textarea.value.length);
        refs.textarea.value = '';
        refs.textCounter.innerHTML = textLimit;
    }
}

function onEscKeyDown (event) {
    if (event.code === 'Escape') {
        refs.openButton.classList.toggle('is-hidden');
        refs.bakdrop.classList.toggle('is-hidden');
    }
}