const express = require("express");
const { sendNotification, subscribeToTopic } = require("../controllers/notification.controller");
const router = express.Router();

router.post("/send-notification", sendNotification);
router.post("/subscribe-to-topic", subscribeToTopic);

module.exports = router;