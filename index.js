
const titleNode = document.querySelector('.main__title');
const inputNodes = document.querySelectorAll('.main__label');
const reverseBtnNode = document.querySelector('.main__reverse-btn');
const translateBtn = document.querySelector('.main__button');

const alphaBet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const crypt = 3;
let isReversed = false;

reverseBtnNode.addEventListener('click', () => {
    const phrase = inputNodes[0].value;
    isReversed = !isReversed;
    if(isReversed){
        inputNodes[1].value = decrypt(alphaBet, phrase, crypt);
        titleNode.textContent = 'Перевести Шифр в Текст'
    }else{
        inputNodes[1].value = encrypt(alphaBet, phrase, crypt)
        titleNode.textContent = 'Перевести Текст в Шифр'
    }
})

function encrypt(alphaBet, phrase, crypt){
    const toArrAlphaBet = alphaBet.split('');
    const toArrPhrase = phrase.split('');
    let cryptWord = [];
    for(let i = 0; i < toArrPhrase.length; i++){
        const word = toArrPhrase[i];
        if(word === ' '){
            cryptWord.push(word);
        };
        const findIndex = toArrAlphaBet.indexOf(word);
        if(findIndex !== -1){
            const encryptIndexWord = (findIndex - crypt + toArrAlphaBet.length) % toArrAlphaBet.length;
            cryptWord.push(toArrAlphaBet[encryptIndexWord]);
        }
    }
    return cryptWord.join('')
    
}

function decrypt(alphaBet, phrase, crypt){
    const toArrAlphaBet = alphaBet.split('');
    const toArrPhrase = phrase.split('');
    let decryptWord = [];
    for(let i = 0; i < toArrPhrase.length; i++){
        const word = toArrPhrase[i];
        if(word === ' '){
            decryptWord.push(word);
        };
        const findIndex = toArrAlphaBet.indexOf(word);
        if(findIndex !== -1){
            const encryptIndexWord = (findIndex + crypt + toArrAlphaBet.length) % toArrAlphaBet.length;
            decryptWord.push(toArrAlphaBet[encryptIndexWord]);
        }
    }
    return decryptWord.join('')
}

