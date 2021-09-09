import * as Tone from 'tone';

class ChartPlayback {
    constructor() {
        this.letters = document.querySelectorAll('.code-char');
        // this.numbers = document.querySelectorAll('.code-numbers');
        this.synth = new Tone.Synth().toDestination();

        this.play.bind(this);
        this.playback.bind(this);

        this.playback();
    }

    async play(duration) {
        await Tone.start();
        await this.synth.triggerAttackRelease('C4', duration);
    }

    playback() {
        this.letters.forEach(letter => {
            letter.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                let code = document.querySelector('.code-chart-code')
                
                code.innerHTML.split(' ').forEach(async char => {
                    if (char === '.') {
                        this.play('8n');
                    } else if (char === '_') {
                        this.play('2n'), 100;
                    }
                })
            });
        })
    }
}

export default ChartPlayback;