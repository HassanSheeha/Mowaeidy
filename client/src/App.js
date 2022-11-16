import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import AdminsData from "./components/AdminsData";
import AddAdmin from "./components/AddAdmin";
import UsersData from "./components/UsersData";
import EditUser from "./components/EditUser";
import IndustriesData from "./components/IndustriesData";
import AddIndustry from "./components/AddIndustry";
import BlogsData from "./components/BlogsData";
import AddBlog from "./components/AddBlog";
import InfoData from "./components/InfoData";
import EditInfo from "./components/EditInfo";
import Organizers from "./components/organizers";
import EditDetails from "./components/EditDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OrganizerView from "./components/OrganizerView";
import AddAppointment from "./components/AddAppointment";

function App() {
	return (
		<>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />

				<Route path="organizers" element={<Organizers />} />
				<Route path="/organizers/view" element={<OrganizerView />}>
					<Route path="addAppointment" element={<AddAppointment />} />
				</Route>
				<Route path="organizers/profile/edit" element={<EditDetails />} />

				<Route path="adminpanel" element={<AdminPage />}>
					<Route path="admins" element={<AdminsData />}>
						<Route path="add" element={<AddAdmin />} />
					</Route>
					<Route path="users" element={<UsersData />}>
						<Route path="edit" element={<EditUser />} />
					</Route>
					<Route path="industries" element={<IndustriesData />}>
						<Route path="add" element={<AddIndustry />} />
						<Route path="edit" element={<AddIndustry />} />
					</Route>
					<Route path="blogs" element={<BlogsData />}>
						<Route path="add" element={<AddBlog />} />
						<Route path="edit" element={<AddBlog />} />
					</Route>
					<Route path="info" element={<InfoData />} />
					<Route path="info/edit" element={<EditInfo />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
