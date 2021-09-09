import {code} from './constants';

class CodeChart {
    constructor() {
        this.codeLetters = document.querySelector('.code-letters');
        this.codeNumbers = document.querySelector('.code-numbers');
        this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.numbers = '123456789'.split('');
        this.code = code;

        this.generateChart.bind(this);
        this.generateLetters.bind(this);
        this.generateNumbers.bind(this);

        this.generateChart();
    }

    generateChart() {
        this.generateLetters();
        this.generateNumbers();
    };

    generateLetters() {
        this.letters.forEach(letter => {
            let character = document.createElement('div');
            let char = document.createElement('p')
            let code = document.createElement('p')

            character.classList.add('code-char');
            code.classList.add('code-chart-code');

            char.innerText = letter;
            code.innerText = this.code[letter.toLowerCase()]

            character.nodeValue = code;
            character.append(char, code);

            this.codeLetters.append(character);
        });
    };

    generateNumbers() {
        this.numbers.forEach(number => {
            let numChar = document.createElement('div');
            let num = document.createElement('p');
            let code = document.createElement('p');

            numChar.classList.add('code-char');
            code.classList.add('code-chart-code');
            num.innerText = number;
            code.innerText = this.code[number];

            numChar.nodeValue = code;
            numChar.append(num, code);

            this.codeNumbers.append(numChar);
        });
    };
}

export default CodeChart;