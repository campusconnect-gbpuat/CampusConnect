const express = require("express");
const { sendNotification, subscribeToTopic, unsubscribeFromTopic } = require("../controllers/notification.controller");
const router = express.Router();

router.post("/send-notification", sendNotification);
router.post("/subscribe-to-topic", subscribeToTopic);
router.post("/unsubscribe-from-topic", unsubscribeFromTopic);

module.exports = router;