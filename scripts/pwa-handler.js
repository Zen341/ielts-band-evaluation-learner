// Reference the serviceWorker.
const serviceWorker = navigator.serviceWorker;

// Register our ServiceWorker script, if serviceWorker is available.
if (serviceWorker) {
    serviceWorker
        .register("/pwabuilder-sw.js")
        // .register("/service-worker.js")
        .then(() => console.log("ServiceWorker Registered to the Application!"))
        .catch(() => console.log("Failed to Register the ServiceWorker."));
}

// Create a variable to defer the beforeinstallprompt event.
let beforeInstallEvent;

// Reference the install button from DOM.
const installButton = document.getElementById("btn-download");


// Watch for the beforeinstallevent and defer it.
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    beforeInstallEvent = event;
    // installButton.style.display = "block";
    installButton.classList.remove("d-none")
});

// Prompt for Installation when install button is clicked.
installButton.addEventListener("click", () => {
    beforeInstallEvent
        .prompt()
        .then((choice) => {
            // Hide the install button as its purpose is over.
            if (choice.outcome == "accepted") {
                // installButton.style.display = "none";
                installButton.classList.add("d-none")
            }
        });
});

