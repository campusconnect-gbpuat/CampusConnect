import { getToken } from "firebase/messaging";
import { messaging } from "./config/firebase";
import { API } from "./proxy"
import axios from "axios"

export const checkUserPermissionStatus = async () => {
  return localStorage.getItem('hasAskedForNotifications') === 'true';
};

export const updateUserPermissionStatus = (hasGranted) => {
  localStorage.setItem('hasAskedForNotifications', 'true');
};

export const requestFirebaseNotificationPermission = async () => { 
  const isPermissionGranted = await checkUserPermissionStatus();

  if (!isPermissionGranted) {
    return await Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          console.log(process.env.REACT_APP_FIREBASE_VAPID_KEY);
          updateUserPermissionStatus(true);
          return getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY });
        } else {
          throw new Error('User did not grant permission.');
        }
      })
      .then((token) => {
        console.log('FCM Token:', token);
        return token;
      })
      .catch((err) => {
        console.error('An error occurred while getting the token:', err);
        throw err;
      });
  } else {
    console.log('Notification permission already granted.');
    const currentToken = await getToken(messaging);
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      return currentToken;
    } else {
      return getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY });
    }
  }
};

export const sendNotificationToUser = async (title, body, token) => {
  try {
    const notificationData = {
      notificationTitle: title,
      notificationBody: body,
      registrationToken: token,
    };

    const response = await axios.post(`${API}/send-notification`, notificationData);
    console.log('Notification sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending notification:', error.response ? error.response.data : error.message);
  }
};
      