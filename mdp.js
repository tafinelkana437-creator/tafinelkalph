const displayInput = document.querySelector('#password-display');
const lengthInput = document.querySelector('#length');

const uppercaseCheck = document.querySelector('#include-uppercase');
const lowercaseCheck = document.querySelector('#include-lowercase');
const numbersCheck = document.querySelector('#include-numbers');
const symbolsCheck = document.querySelector('#include-symbols');

const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('#copy-btn');

function generatePassword() {
    const length = parseInt(lengthInput.value, 10) || 12;
    let allowedChars = "";

    if (lowercaseCheck.checked) allowedChars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseCheck.checked) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersCheck.checked) allowedChars += "0123456789";
    if (symbolsCheck.checked) allowedChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (!allowedChars) {
        alert("Sélectionne au moins un type de caractère.");
        return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    displayInput.value = generatedPassword;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    if (!displayInput.value.trim()) {
        alert("Génère d'abord un mot de passe !");
        return;
    }

    navigator.clipboard.writeText(displayInput.value);
    copyBtn.innerText = "Copié !";
    copyBtn.style.backgroundColor = "#10b981";

    setTimeout(() => {
        copyBtn.innerText = "Copier";
        copyBtn.style.backgroundColor = "#38bdf8";
    }, 2000);
});