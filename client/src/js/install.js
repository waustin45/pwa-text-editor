const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
     // Store the triggered events
     window.deferredPrompt = event;

     // Remove the hidden class from the button.
     butInstall.classList.toggle('hidden', false);
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
