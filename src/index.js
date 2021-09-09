// import * as Tone from 'tone';
import Translation from '../scripts/translation';
import Key from '../scripts/key';
import CodeChart from '../scripts/codeChart';
import ChartPlayback from '../scripts/chartPlayback';

document.addEventListener('DOMContentLoaded', () => {
    new Key();
    new Translation();
    new CodeChart();
    new ChartPlayback();
})