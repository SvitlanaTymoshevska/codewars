// const testString = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    return this.split(' ').map(substring => substring.split('')[0].toUpperCase() + substring.slice(1, substring.length)).join(' ');
};

const refs = {
    form: document.querySelector('form'),
    result: document.querySelector('.result'),
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();

    const stringtoJadenCase = e.target.text.value;
    console.log(stringtoJadenCase);
    refs.result.textContent = stringtoJadenCase.toJadenCase();
}


