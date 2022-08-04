function handleSubmit(event) {
    event.preventDefault();
    const validar = inputValidation();
    if (validar === false) {
        alert('Dados Inválidos');
    } else alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
}


function clearALL () {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const inputs = formElements[index];
        inputs.value = '';
        inputs.checked = false;
    }
    textArea.value = '';
}

function enableBtn () {
    const agreeBtn = document.querySelector('#concordo2');
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.disabled = !agreeBtn.checked; 
}

function inputValidation (){
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = document.querySelector('#nome').value.length;
    const invalidName = name < 10 || name > 40;

    const pq = document.querySelector('#why');
    const invalidPq = pq > 500;

    if (invalidEmail || invalidName || invalidName) {
        return false;
    }
    else true;
}

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearALL);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
    const agreeBtn = document.querySelector('#concordo2')
    agreeBtn.addEventListener('change', enableBtn);
}