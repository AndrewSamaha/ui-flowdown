import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Sortable from 'sortablejs';
import { setupCounter } from './counter.js'
import { sections } from './sections';
import { songs } from './songs';
import { asanas } from './asanas';

var sortableAsanasDiv = document.getElementById('sortable-asanas');
var sortable = Sortable.create(sortableAsanasDiv);

var sortableSongsDiv = document.getElementById('sortable-songs');
var sortable2 = Sortable.create(sortableSongsDiv);

const verticalScale = 2;

document.querySelector('#sortable-sections').innerHTML = sections.map((section) => {
    const min = Number(section.duration.split(":")[0]);
    const sec = Number(section.duration.split(":")[1])/60;
    const duration = min + sec;
    const height = duration * verticalScale;
    return `
    <div class="section card" style="height: ${height}em;">
        ${section.name} 
    </div>`
}).join(' ');


document.querySelector('#sortable-songs').innerHTML = songs.map((song) => {
    const min = Number(song.duration.split(":")[0]);
    const sec = Number(song.duration.split(":")[1])/60;
    const duration = min + sec;
    const height = duration * verticalScale;
    return `
    <div class="song card" style="height: ${height}em;">
        ${song.name} - ${song.artist} - ${song.duration}
    </div>`
}).join(' ');

document.querySelector('#sortable-asanas').innerHTML = asanas.map((asana) => {
    const min = Number(asana.duration.split(":")[0]);
    const sec = Number(asana.duration.split(":")[1])/60;
    const duration = min + sec;
    const height = duration * verticalScale;
    return `
    <div class="asana card" style="height: ${height}em;">
        ${asana.name} - ${asana.duration} ${asana.cue ? `<br>${asana.cue}` : ''} 
    </div>`
}).join(' ');

