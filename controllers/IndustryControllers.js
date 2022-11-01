const industryModel = require("../models/industry");

// getting all industries in search page
const getAllIndustriesSearch = async (req, res) => {
	// try {
	const foundIndustries = await industryModel
		.find({})
		.select("name description");
	if (!foundIndustries) {
		res.json({ message: "organizer doesn't exist" });
	} else {
		res.json(foundIndustries);
	}
};
// getting all industries in dashboard page
const getAllIndustriesDashboard = async (req, res) => {
	// try {
	const foundIndustries = await industryModel.find({});
	if (!foundIndustries) {
		res.json({ message: "organizer doesn't exist" });
	} else {
		res.json(foundIndustries);
	}
};

// adding an industry in dashboard page
const addIndustry = async (req, res) => {
	try {
		const newIndustry = new industryModel(req.body);
		const savedIndusrty = await newIndustry.save();
		res.json({ message: "done", savedIndusrty });
	} catch (err) {
		res.json({ message: "error" });
	}
};

// editing an industry in dashboard page
const editIndustry = async (req, res) => {
	try {
		const updatedIndustry = await industryModel
			.findOneAndUpdate({ _id: req.query.id }, req.body)
			.exec();
		updatedIndustry
			? res.json({ message: "industry updated" })
			: res.json({ message: "industry doesn't exist" });
	} catch (err) {
		res.json({ message: "error" });
	}
};

// deleting an industry in dashboard page
const deleteIndustry = async (req, res) => {
	try {
		const updatedIndustry = await industryModel
			.findOneAndDelete({ _id: req.query.id })
			.exec();
		updatedIndustry
			? res.json({ message: "industry deleted" })
			: res.json({ message: "industry doesn't exist" });
	} catch (err) {
		res.json({ message: "error" });
	}
};

module.exports = {
	getAllIndustriesSearch,
	getAllIndustriesDashboard,
	addIndustry,
	editIndustry,
	deleteIndustry,
};
