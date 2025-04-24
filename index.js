const alphaBet = 'abcdefghijklmnopqrstuvwxyz';
const phrase = 'my name is vova';
const crypt = 3;

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
const encryptPhrase = encrypt(alphaBet, phrase, crypt);
console.log(encryptPhrase);

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

const decryptPhrase = decrypt(alphaBet, encryptPhrase, crypt);
console.log(decryptPhrase);
