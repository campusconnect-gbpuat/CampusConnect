const messaging = require('../firebase/firebase-admin');

const sendNotification = (req, res) => {
  const { notificationTitle, notificationBody, registrationToken } = req.body;
  const message = {
    notification: {
      title: notificationTitle,
      image: "https://campusconnect-ten.vercel.app/cc_notification_logo.png",
      body: notificationBody,
    },
    token: registrationToken,
  };

  messaging.send(message)
    .then((response) => {
      console.log('Notification sent successfully:', response);
      res.status(200).send('Notification sent successfully');
    })
    .catch((error) => {
      console.error('Error sending notification:', error);
      res.status(500).send('Error sending notification');
    });
};

module.exports = { sendNotification };
