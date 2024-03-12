import { messaging } from "./config/firebase";
import { onMessage } from "firebase/messaging";

const setFirebaseMessaging = () => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
      };

      if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification(notificationTitle, notificationOptions);
        });
      }
    });
};

export default setFirebaseMessaging;
