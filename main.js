//import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import Sortable from 'sortablejs';
import { setupCounter } from './counter.js'

var el = document.getElementById('sortable-asanas');
var sortable = Sortable.create(el);

var el2 = document.getElementById('sortable-songs');
var sortable2 = Sortable.create(el2);

