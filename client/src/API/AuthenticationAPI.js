import axios from "axios";
const baseUrl = "http://localhost:5000";

const addNewUser = async (user) => {
	try {
		const res = axios.post(`${baseUrl}/user/signUp`, user);
		console.log(res);
		return res;
	} catch (error) {
		console.log(error);
	}
};
const loginUser = async (user) => {
	try {
		const res = axios.post(`${baseUrl}/user/signIn`, user);
		console.log(res);
		return res;
	} catch (e) {
		console.log(e);
	}
};
const addNewOrganizer = async (organizer) => {
	try {
		const res = axios.post(`${baseUrl}/organizer/organizerSignUp`, organizer);
		console.log(res);
		return res;
	} catch (error) {
		console.log(error);
	}
};

const getInudstries = async () => {
	try {
		const res = await axios.get(`${baseUrl}/adminpanel/industries`);
		console.log(res);
		return res;
	} catch (e) {
		console.log(e);
	}
};

export const userAPI = {
	addNewUser,
	loginUser,
};
export const organizerAPI = {
	getInudstries,
	addNewOrganizer,
};
