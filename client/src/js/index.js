import { Workbox } from "workbox-window";
import Editor from "./editor";

// Import styles
import "../css/style.css";

// Initialize the editor
const editor = new Editor();

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // Register the Workbox service worker
  const workboxSW = new Workbox("/src-sw.js");

  workboxSW
    .register()
    .then(() => {
      console.log("Service worker registered successfully");
    })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });

  // Add an event listener to customize the service worker update cycle
  workboxSW.addEventListener("installed", (event) => {
    if (event.isUpdate) {
      // Display a notification to inform the user about new content
      const updateNotification = new Notification("New Content Available", {
        body: "Click to refresh and load the latest version.",
      });

      // Handle user interaction with the notification
      updateNotification.addEventListener("click", () => {
        window.location.reload();
      });
    }
  });
} else {
  console.error("Service workers are not supported in this browser.");
}
