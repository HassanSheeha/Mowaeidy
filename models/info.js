const mongoose = require("mongoose");

const webInfoSchema = new mongoose.Schema({
	aboutUs: { type: String },
	contactPhones: { type: Array },
	//could be object or array
	prices: { type: Array, required: true, minlength: 5 },
	//needs more links
	socialMediaLinks: {
		facebook: { type: String },
		linkedin: { type: String },
		email: { type: String },
	},
	blog: {
		blogHeader: { type: String },
		blogBody: { type: String },
		blogPicture: { type: String },
		blogDate: { type: Date },
	},
});

const WebInfoModel = mongoose.model("webInfo", webInfoSchema);

module.exports = WebInfoModel;
