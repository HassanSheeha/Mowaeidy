const mongoose = require("mongoose");

const webInfoSchema = new mongoose.Schema({
	aboutUs: { type: String },
	contactPhones: { type: Array },
	//object for two features
	prices: {
		free: {
			featureOne: { type: String, required: true },
			featureTwo: { type: String, required: true },
			featureThree: { type: String, required: true },
			price: { type: String, required: true },
		},
		premium: {
			featureOne: { type: String, required: true },
			featureTwo: { type: String, required: true },
			featureThree: { type: String, required: true },
			price: { type: String, required: true },
		},
	},
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
