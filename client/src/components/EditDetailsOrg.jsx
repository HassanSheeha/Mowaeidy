import { useState } from "react";
import { editOrganizerMe } from "../store/reducer/orgSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

export default function EditDetails() {
	//----state is carrying the data from orgDetails
	const { state } = useLocation();
	const navigator = useNavigate();

	const { editedOrg } = useSelector((state) => state.orgReducer);
	const dispatch = useDispatch();

	//----Handling data from Inputs

	const [formData, setFormData] = useState({
		name: state ? state.orgName : "",
		title: state ? state.title : "",
		industry: state ? state.industryIDFK?.name : "",
		description: state ? state.description : "",
		contact: state ? state.contact : {},
		imgSrc: state ? state.userIDFK?.profilePicture : "",
	});
	const [errorMessage, setErrorMessage] = useState({
		name: "",
		title: "",
		industry: "",
		description: "",
		contact: {},
		imgSrc: "",
	});
	const [isEdited, setIsEdited] = useState(false);

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
			let orgArg = formData;
			dispatch(editOrganizerMe({ idArg, orgArg })); //args names must match the names in CRUD
		} else {
			console.log("Not Authorized to Edit to Database"); //!!!
			console.log(formData);
		}
		setTimeout(() => {
			navigator(-1);
		}, 3000);
	};

	return (
		<div className="bg-light">
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
								htmlFor="orgImgSrc"
							>
								Picture URL <FaEdit className="ms-2 fs-5 mb-1" />
							</Form.Label>
							<Form.Control
								name="imgSrc"
								type="url"
								id="orgImgSrc"
								className="form-control fs-6 bg-transparent border-0 mb-3 text-primary rounded-pill"
								defaultValue={formData.imgSrc}
								placeholder="Enter Picture URL"
							/>
							<div className="text-danger">{errorMessage.imgSrc}</div>
						</div>

						<div className="col-lg-9 col-md-7 col-12">
							<Form.Label
								className=" mt-5 text-dark fw-semibold"
								htmlFor="orgName"
							>
								Organizer Name
							</Form.Label>
							<Form.Control
								name="name"
								type="text"
								id="orgName"
								className="form-control fs-4 fw-bold bg-transparent border-0 text-primary rounded-pill w-75"
								defaultValue={formData.name}
								placeholder="Enter Name"
							/>
							<div className="text-danger">{errorMessage.name}</div>
							<Form.Label
								className=" mt-2 text-dark fw-semibold"
								htmlFor="orgTitle"
							>
								Title/Job
							</Form.Label>
							<Form.Control
								name="title"
								type="text"
								id="orgTitle"
								className="form-control fs-5 fw-semibold bg-transparent border-0 mb-2 text-dark rounded-pill w-75"
								defaultValue={formData.title}
								placeholder="Enter Title"
							/>
							<div className="text-danger">{errorMessage.title}</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-10 col-12 mb-2">
							<hr />
							<Form.Label
								className=" mt-2 text-dark fw-semibold"
								htmlFor="orgDesc"
							>
								Bio/Description
							</Form.Label>
							<Form.Control
								name="description"
								as="textarea"
								rows={3}
								id="orgDesc"
								className="form-control bg-transparent border-0 mb-4 text-black-50 rounded-1"
								defaultValue={formData.description}
								placeholder="Enter a description"
							/>
							<div className="text-danger">{errorMessage.description}</div>
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
							<div className="my-4 fw-semibold text-dark">
								<Form.Label
									className="text-warning fw-semibold"
									htmlFor="orgIndustry"
								>
									Industry
								</Form.Label>
								<Form.Control
									name="industry"
									type="text"
									id="orgIndustry"
									className="form-control text-center fs-5 fw-semibold mt-2 border-0 text-primary rounded-pill"
									defaultValue={formData.industry}
									placeholder="Enter Industry"
								/>
							</div>
							<div className="text-danger">{errorMessage.industry}</div>
							<hr />

							<div className="my-3 fw-semibold text-warning">
								Contact Info:
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="orgorgEmail"
									>
										organizer Email:
									</Form.Label>
									<Form.Control
										name="contact.orgEmail"
										type="email"
										id="orgorgEmail"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.contact.orgEmail}
										placeholder="Enter organization Email"
									/>
								</div>
								<div className="text-danger">
									{errorMessage.contact.orgEmail}
								</div>
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="orgphone"
									>
										Phone:
									</Form.Label>
									<Form.Control
										name="contact.phone"
										type="tel"
										id="orgphone"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.contact.phone}
										placeholder="Enter Phone"
									/>
								</div>
								<div className="text-danger">{errorMessage.contact.phone}</div>
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="organthorPhone"
									>
										Another Phone:
									</Form.Label>
									<Form.Control
										name="contact.anthorPhone"
										type="tel"
										id="organthorPhone"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										defaultValue={formData.contact.anthorPhone}
										placeholder="Enter another Phone"
									/>
								</div>
								<div className="text-danger">
									{errorMessage.contact.anthorPhone}
								</div>
								<hr className="my-4" />
							</div>
						</div>
						<div className="vr p-0"></div>

						<div className="col">
							<h4 className="my-4 text-dark">Calender</h4>
							<p className="lead fs-2 my-3 py-5 text-center text-primary">
								CALENDER Can't Be Edited From Here
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
							{" "}
							{state ? "Save Changes" : "---"}
						</button>
					</div>
				)}
			</Form>

			{editedOrg && (
				<Alert
					className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
					variant="success"
				>
					Organizer Info Edited Successfully
				</Alert>
			)}
		</div>
	);
}
