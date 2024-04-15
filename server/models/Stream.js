const mongoose = require("mongoose");
require("mongoose-type-url");

const streamSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		organizer: {
			type: String,
		},
		date: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		picture: [
			{
				type: String,
				default: null,
			},
		],
		type: {
			type: String,
			required: true,
		},
		attendees: {
			type: Number,
			default: 0,
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Stream", streamSchema);
