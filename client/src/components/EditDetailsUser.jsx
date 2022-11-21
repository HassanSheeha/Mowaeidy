import { useState } from "react";
import { editUserMe } from "../store/reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

export default function UserEditDetails() {
	const [isEdited, setIsEdited] = useState(false);
	//----state is carrying the data from userDetails
	const { state } = useLocation();
	const navigator = useNavigate();

	const { editedUser } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	//----Handling data from Inputs
	const [formData, setFormData] = useState({
		firstName: state ? state.firstName : "",
		lastName: state ? state.lastName : "",
		email: state ? state.email : "",
		phone: state ? state.phone : "",
		city: state ? state.city : "",
		dateOfBirth: state ? state.dateOfBirth : "",
		imgSrc: state ? state.profilePicture : "",
	});
	const [errorMessage, setErrorMessage] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		city: "",
		dateOfBirth: "",
		imgSrc: "",
	});

	//----Validating and accepting data from Inputs
	const changeHandler = (e) => {
		if (!isEdited) setIsEdited(true);
		if (e.target.value.length > 0) {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
			setErrorMessage({
				...errorMessage,
				[e.target.name]: "",
			});
		} else {
			setErrorMessage({
				...errorMessage,
				[e.target.name]: "Input field is required",
			});
		}
	};

	//----Button fires Action to edit

	const submitHandler = (e) => {
		e.preventDefault();
		if (state) {
			let idArg = state._id;
			let userArg = formData;
			dispatch(editUserMe({ idArg, userArg })); //args names must match the names in CRUD
		} else {
			console.log("Not Authorized to Edit to Database"); //!!!
		}
		setTimeout(() => {
			navigator(-1);
		}, 3000);
	};

	return (
		<div className="bg-light mt-5">
			<Form
				noValidate
				className="p-5 text-dark"
				onSubmit={submitHandler}
				onChange={changeHandler}
			>
				<div className="container border rounded-5 border-2 border-dark">
					<div className="row p-3 pb-0 d-flex w-100 justify-content-between">
						<div className="col-lg-3 col-md-5 col-8">
							<img
								src={formData.imgSrc}
								width="180"
								height="180"
								className="border border-warning rounded-circle shadow"
							/>
							<Form.Label
								className="mt-3 text-dark fw-semibold"
								htmlFor="userImgSrc"
							>
								Picture URL <FaEdit className="ms-2 fs-5 mb-1" />
							</Form.Label>
							<Form.Control
								name="imgSrc"
								type="url"
								id="userImgSrc"
								className="form-control fs-6 bg-transparent border-0 mb-3 text-primary rounded-pill"
								defaultValue={formData.imgSrc}
								placeholder="Enter Picture URL"
							/>
							<div className="text-danger">{errorMessage.imgSrc}</div>
						</div>

						<div className="col-lg-9 col-md-7 col-12">
							<Form.Label
								className=" mt-5 text-dark fw-semibold"
								htmlFor="firstName"
							>
								First Name
							</Form.Label>
							<Form.Control
								name="firstName"
								type="text"
								id="firstName"
								className="form-control fs-4 fw-bold bg-transparent border-0 text-primary rounded-pill w-75"
								defaultValue={formData.firstName}
								placeholder="Enter your first name"
							/>
							<div className="text-danger">{errorMessage.firstName}</div>
							<Form.Label
								className="mt-2 text-dark fw-semibold"
								htmlFor="lastName"
							>
								Last Name
							</Form.Label>
							<Form.Control
								name="lastName"
								type="text"
								id="lastName"
								className="form-control fs-4 fw-bold bg-transparent border-0 mb-2 text-primary rounded-pill w-75"
								defaultValue={formData.lastName}
								placeholder="Enter your last name"
							/>
							<div className="text-danger">{errorMessage.lastName}</div>
						</div>
					</div>
					<hr className="m-0" />

					<div className="row">
						<div
							className="col-lg-3 col-md-4 col-12 rounded-top rounded-5"
							style={{
								backgroundImage:
									"linear-gradient(to bottom, rgb(21, 52, 98), rgb(186, 209, 194))",
							}}
						>
							<div className="my-3 fw-semibold text-dark">
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="userEmail1"
									>
										Email:
									</Form.Label>
									<Form.Control
										name="email"
										type="email"
										id="userEmail1"
										className="form-control text-center  mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.email}
										placeholder="Enter Email"
									/>
								</div>
								<div className="text-danger">{errorMessage.email}</div>
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="userPhone1"
									>
										Phone:
									</Form.Label>
									<Form.Control
										name="phone"
										type="tel"
										id="userPhone1"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.phone}
										placeholder="Enter Phone 1"
									/>
								</div>
								<div className="text-danger">{errorMessage.phone}</div>
								{/* <div className="text-dark text-start my-3">
									<Form.Label className="text-dark fw-semibold" htmlFor="userPhone2">Phone 2:</Form.Label>
									<Form.Control
										name="phone2"
										type="tel"
										id="userPhone2"
										className="form-control text-center bg-transparent mt-2 border-0 text-white rounded-pill"
										defaultValue={formData.phone2}
										placeholder="Enter Phone 2"
									/>
								</div>
								<div className="text-danger">
									{errorMessage.phone2}
								</div> */}
								{/* <div className="text-dark text-start my-3">
								<Form.Label className="text-dark fw-semibold" htmlFor="userFacebook">Facebook:</Form.Label>
									<Form.Control
										name="facebook"
										type="url"
										id="userFacebook"
										className="form-control text-center bg-transparent mt-2 border-0 text-dark rounded-pill"
										defaultValue={formData.facebook}
										placeholder="Enter Facebook Profile"
									/>
								</div>
								<div className="text-danger">
									{errorMessage.facebook}
								</div>
								<div className="text-dark text-start my-3">
									<Form.Label className="text-dark fw-semibold" htmlFor="userLinkedin">LinkedIn:</Form.Label>
									<Form.Control
										name="linkedin"
										type="url"
										id="userLinkedin"
										className="form-control text-center bg-transparent mt-2 border-0 text-dark rounded-pill"
										defaultValue={formData.linkedin}
										placeholder="Enter LinkedIn Profile"
									/>
								</div>
								<div className="text-danger">
									{errorMessage.linkedin}
								</div> */}
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="userCity"
									>
										City:
									</Form.Label>
									<Form.Control
										name="city"
										type="text"
										id="userCity"
										className="form-control text-center  mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.city}
										placeholder="Enter Your City/Location"
									/>
								</div>
								<div className="text-danger">{errorMessage.city}</div>
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="userDoB"
									>
										Date of Birth:
									</Form.Label>
									<Form.Control
										name="dateOfBirth"
										type="text"
										id="userDoB"
										className="form-control text-center  mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.dateOfBirth}
										placeholder="Enter Your DoB"
									/>
								</div>
								<div className="text-danger">{errorMessage.dateOfBirth}</div>
								<hr className="my-4" />
							</div>
						</div>
						<div className="vr p-0"></div>

						<div className="col">
							<h4 className="my-4 text-dark">Appointment Details</h4>
							<p className="lead fs-2 my-3 py-5 text-center text-primary">
								APPOINTMENTS Can't Be Edited From Here
							</p>
						</div>
					</div>
				</div>
				{isEdited && (
					<div className="row pt-5">
						<button
							className={
								state
									? "col-lg-2 col-md-3 col-4 btn btn-primary rounded-pill fw-semibold mx-auto text-warning"
									: "disabled invisible"
							}
							name="edit"
						>
							{state ? "Save Changes" : "---"}
						</button>
					</div>
				)}
			</Form>

			{editedUser && (
				<Alert
					className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
					variant="success"
				>
					User Info Edited Successfully
				</Alert>
			)}
			{/* {noeditAlert && (<Alert className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
          variant="warning">Not Authorized to Edit from Database</Alert>)} */}
		</div>
	);
}
