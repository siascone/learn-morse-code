import {code} from './constants';

class Translation {
    constructor() {
        this.textarea = document.querySelector('textarea');
        this.translation = document.querySelector('.translation')
        this.code = code;
        this.transCode = '';

        this.translate.bind(this);

        this.translate();
    }

    translate() {

        /// TODO fix translator
        
        this.textarea.addEventListener('change', () => {
            // debugger
            let text = this.textarea.value.split('');
            this.transCode = ''
            text.forEach(char => {
                // debugger;
                if (this.code[char.toLowerCase()]) {
                    // debugger
                    this.transCode = this.transCode + this.code[char.toLowerCase()] + '    ';
                }
            })

            // let trans = document.createElement('div');
            // trans.innerText = this.transCode;
            // debugger
            // this.translation.append(trans);
            this.translation.innerText = this.transCode;

        })
    }
}

export default Translation