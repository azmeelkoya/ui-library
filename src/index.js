import Tooltip from './my-ui/tooltip';
import Dropdown from './my-ui/dropdown';
import Tabs from './my-ui/tabs';
import Snackbar from './my-ui/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instances = new Dropdown(dropdown);
    instances.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create a snackbar
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});