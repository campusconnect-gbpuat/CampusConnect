const messaging = require('../firebase/firebase-admin');

const sendNotification = (req, res) => {
  const { notificationTitle, notificationBody, registrationTopic } = req.body;
  const message = {
    notification: {
      title: notificationTitle,
      image: "https://campusconnect-ten.vercel.app/cc_notification_logo.png",
      body: notificationBody,
    },
    topic: registrationTopic,
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

const subscribeToTopic = (req, res) => {
  const { notificationToken, notificationTopic } = req.body;

  messaging.subscribeToTopic(notificationToken, notificationTopic)
    .then((response) => {
      console.log('Successfully subscribed to topic', response);
      res.send("Subscribed to topic");
    })
    .catch((error) => {
      console.log('Error subscribing to topic:', error);
      res.status(500).send("Error subscribing to topic");
    });
};

module.exports = { sendNotification, subscribeToTopic };
