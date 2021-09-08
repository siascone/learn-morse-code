import * as Tone from 'tone';

class Key {
    constructor() {
        this.key = document.querySelector('.key');
        this.synth = new Tone.Synth().toDestination();

        this.keyDown.bind(this);
        this.ditDah.bind(this)
        this.keyDown();
    }

    async ditDah() {
        await Tone.start();
        const now = Tone.now();
        this.synth.triggerAttack('C4', now)

    }

    keyDown() {
        let flag = true
        // debugger
        document.addEventListener('keypress', (e) => {
            if (e.key === ' ' && flag) {
                flag = false
                this.ditDah();
                
                this.key.classList.toggle('pressed')
            };
        });
        document.addEventListener('keyup', (e) => {
            if (e.key === ' ' && !flag) {
                this.key.classList.toggle('pressed')
                this.synth.triggerRelease();
                flag = true;
            }
        })
    };

}

export default Key;