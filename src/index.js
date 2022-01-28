const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let result = '';

    let letters = expr.replace(/(.{10})/g, "$1,")
        .replace(/,$/, '')
        .split(',');
    letters.forEach(element => {

        if (element == '**********') {
            result += ' '
        } else {
            result += encodeLetter(element);
        }
    });

    return result;
}

function encodeLetter(binaryCode) {

    let letterCode = binaryCode.replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-')

    return MORSE_TABLE[letterCode] || '?';
}

module.exports = {
    decode
}