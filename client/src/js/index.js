import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const butInstall = document.getElementById('buttonInstall');
const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('./src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}


// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.addEventListener('click', () => {
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault()
    textHeader.textContent = 'Successfully installed!';
console.log('👍', 'appinstalled', event);
});
