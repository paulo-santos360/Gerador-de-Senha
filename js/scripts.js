//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generate-password");



// Funções
// Letras, Números e Simbolos
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

//Eventos
generatePasswordButton.addEventListener("click", () => {
    /* alert("ola"); */
});