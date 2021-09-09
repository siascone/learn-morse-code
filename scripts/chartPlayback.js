import * as Tone from 'tone';

class ChartPlayback {
    constructor() {
        this.codeChart = document.querySelector('.code-chart');
        this.synth = new Tone.Synth().toDestination();

        this.play.bind(this);
        this.playback.bind(this);

        this.playback();
    }

    async play(duration) {
        await Tone.start();
        this.synth.triggerAttackRelease('C4', duration)
    }

    playback() {
        this.codeChart.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let char = e.target;
            debugger;
        })
    }
}

export default ChartPlayback;