import { useEffect, useState } from "react";
import { editOrganizerMe } from "../store/reducer/orgSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert, Col, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { organizerAPI } from "../API/AuthenticationAPI";

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

	////new
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { addNewOrganizer, getInudstries } = organizerAPI;
	const [industries, setIndusrty] = useState();
	const [individual, setIndivdual] = useState(false);
	const [industryIDFK, setIndustryIDFK] = useState();
	const [allowPayment, setAllowPayment] = useState(false);
	const [msg, setMsg] = useState("");
	const [alert, setAlert] = useState();

	const [availHours, setAvailHours] = useState({
		startTime: "",
		endTime: "",
	});
	const [contact, setContact] = useState({
		phone: "",
		anthorPhone: "",
		orgEmail: "",
	});
	const [days, setDays] = useState({
		sat: 7,
		sun: 7,
		mon: 7,
		tue: 7,
		wed: 7,
		thu: 7,
		fri: 7,
	});
	const [satChecked, setSatChecked] = useState(false);
	const [sunChecked, setSunChecked] = useState(false);
	const [monChecked, setMonChecked] = useState(false);
	const [tueChecked, setTueChecked] = useState(false);
	const [wedChecked, setWedChecked] = useState(false);
	const [thuChecked, setThuChecked] = useState(false);
	const [friChecked, setFriChecked] = useState(false);

	const checkedDays = () => {
		state?.availDays?.map((day) => {
			switch (day) {
				case 0:
					setSunChecked(true);
					break;
				case 1:
					setMonChecked(true);
					break;
				case 2:
					setTueChecked(true);
					break;
				case 3:
					setWedChecked(true);
					break;
				case 4:
					setThuChecked(true);
					break;
				case 5:
					setFriChecked(true);
					break;
				case 6:
					setSatChecked(true);
					break;
				default:
					break;
			}
		});
	};
	const [daysError, setDaysError] = useState(false);
	const phoneHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value !== null) {
			setContact({ ...contact, phone: e.target.value });
		}
	};
	const anthorPhoneHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value !== null) {
			setContact({ ...contact, anthorPhone: e.target.value });
		}
	};
	const orgEmailHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value !== null) {
			setContact({ ...contact, orgEmail: e.target.value });
		}
	};

	const startTimeHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value !== null) {
			setAvailHours({ ...availHours, startTime: e.target.value });
		}
	};
	const endTimeHandler = (e) => {
		if (e.target.value !== null) {
			setAvailHours({ ...availHours, endTime: e.target.value });
		}
	};

	const getAllIndustries = async () => {
		try {
			const res = await getInudstries();
			setIndusrty(res.data);
		} catch (e) {
			console.log(e);
		}
	};
	const daysHandler = (e) => {
		setDaysError(false);
		let dayName = e.target.name;
		if (e.target.checked) {
			setDays({ ...days, [dayName]: parseInt(e.target.value) });
		} else {
			setDays({ ...days, [dayName]: 7 });
		}
	};
	const industryHandler = (e) => {
		let selectedIndustry = e.target.value;
		setIndustryIDFK(selectedIndustry);

		industries.map((industry) => {
			if (industry._id === selectedIndustry) {
				setAllowPayment(industry.allowPayment);
			}
			return industry;
		});
	};
	const indvidualHandler = (e) => {
		if (e.target.checked) {
			setIndivdual(true);
		} else {
			setIndivdual(false);
		}
	};

	// const onSubmit = (data) => {
	// 	let userIDFK = id;
	// 	let availDays = [];
	// 	let keys = Object.keys(days);
	// 	keys.map((key) => {
	// 		if (days[key] !== 7) {
	// 			availDays.push(days[key]);
	// 			console.log(availDays);
	// 		}
	// 		return days;
	// 	});
	// 	const { amountOfRequiredDaposit, description, orgName, title } = data;
	// 	const newOrganizer = {
	// 		amountOfRequiredDaposit,
	// 		description,
	// 		orgName,
	// 		title,
	// 		individual,
	// 		contact,
	// 		availHours,
	// 		availDays,
	// 		industryIDFK,
	// 		userIDFK,
	// 	};
	// 	if (availDays.length === 0) {
	// 		setDaysError(true);
	// 	} else {
	// 		add(newOrganizer);
	// 		console.log(newOrganizer);
	// 	}
	// };

	useEffect(() => {
		getAllIndustries();
		checkedDays();
	}, []);
	///

	const [isEdited, setIsEdited] = useState(false);

	//----Validating and accepting data from Inputs
	const changeHandler = (e) => {
		if (!isEdited) setIsEdited(true);
		switch (e.target.name) {
			case "contact.orgEmail":
				if (e.target.value.length > 0) {
					setFormData({
						...formData,
						contact: { ...formData.contact, orgEmail: e.target.value },
					});
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "", //!!!
					});
				} else {
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "Input field is required",
					});
				}
				break;
			case "contact.phone":
				if (e.target.value.length > 0) {
					setFormData({
						...formData,
						contact: { ...formData.contact, phone: e.target.value },
					});
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "", //!!!
					});
				} else {
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "Input field is required",
					});
				}
				break;
			case "contact.anthorPhone":
				if (e.target.value.length > 0) {
					setFormData({
						...formData,
						contact: { ...formData.contact, anthorPhone: e.target.value },
					});
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "", //!!!
					});
				} else {
					setErrorMessage({
						...errorMessage,
						[e.target.name]: "Input field is required",
					});
				}
				break;

			default:
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
				break;
		}
	};

	//----Button fires Action to edit
	const submitHandler = (e) => {
		if (state) {
			let idArg = state._id;
			let orgArg = formData; //new organizer from add
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
				onSubmit={handleSubmit(submitHandler)}
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
								name="orgName"
								type="text"
								id="orgName"
								className="form-control fs-4 fw-bold bg-transparent border-0 text-primary rounded-pill w-75"
								placeholder="Enter Name"
								{...register("orgName", {
									value: state?.orgName,
									required: "orgName is Required",
									minLength: {
										value: 5,
										message: "orgName must be at least 5 letters",
									},
									maxLength: {
										value: 50,
										message: "OrgName must be less than 50 letter ",
									},
								})}
							/>
							{errors.orgName && (
								<p className="text-warning mt-3 fw-semibold">
									{errors.orgName.message}
								</p>
							)}
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
								placeholder="Enter Title"
								{...register("title", {
									required: "Title is Required",
									value: state?.title,
									minLength: {
										value: 4,
										message: "Title must be at least 4 character",
									},
									maxLength: {
										value: 20,
										message: "Title must be less than 20 character ",
									},
								})}
							/>
							{errors.title && (
								<p className="text-warning mt-3 fw-semibold">
									{errors?.title?.message}
								</p>
							)}{" "}
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
								placeholder="Enter a description"
								{...register("description", {
									required: "You Must Describe Your Industry",
									value: state?.description,
									minLength: {
										value: 20,
										message: "description must be more than 20 character",
									},
									maxLength: {
										value: 400,
										messsage: "description must be less than 400 character",
									},
								})}
							/>
							{errors.description && (
								<p className="text-warning fw-semibold">
									{errors.description?.message}
								</p>
							)}{" "}
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
								<Form.Select
									name="industry"
									type="text"
									id="orgIndustry"
									onChange={industryHandler}
									className="form-control text-center fs-5 fw-semibold mt-2 border-0 text-primary rounded-pill"
									placeholder="Enter Industry"
								>
									{industries &&
										industries.map((indusrty, index) => {
											return (
												<option value={indusrty._id} key={index}>
													{indusrty?.name}
												</option>
											);
										})}
								</Form.Select>
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
										name="orgEmail"
										type="email"
										id="orgEmail"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										placeholder="Enter organization Email"
										{...register("orgEmail", {
											value: state?.contact?.orgEmail,
											pattern: {
												value:
													/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
												message: "Please Enter Valid Email",
											},
										})}
									/>
								</div>
								{errors.orgEmail && (
									<p className="text-danger fw-semibold">
										{errors?.orgEmail?.message}
									</p>
								)}
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="orgphone"
									>
										Phone:
									</Form.Label>
									<Form.Control
										name="phone"
										type="tel"
										id="orgphone"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										placeholder="Enter Phone"
										{...register("Phone", {
											value: state?.contact?.phone,
											required: "Phone is Required",
											pattern: {
												value: /^01[0-2,5]{1}[0-9]{8}$/g,
												message: "Please enter a valid Phone number",
											},
										})}
									/>
								</div>
								{errors.Phone && (
									<p className="text-danger fw-semibold">
										{errors?.Phone?.message}
									</p>
								)}
								<div className="text-dark text-start my-3">
									<Form.Label
										className="text-warning fw-semibold"
										htmlFor="organthorPhone"
									>
										Another Phone:
									</Form.Label>
									<Form.Control
										name="anthorPhone"
										type="tel"
										id="organthorPhone"
										className="form-control text-center mt-2 border-0 text-primary rounded-pill"
										placeholder="Enter another Phone"
										{...register("anthorPhone", {
											value: state?.contact?.anthorPhone,
											pattern: {
												value: /^01[0-2,5]{1}[0-9]{8}$/g,
												message: "Please enter a valid Phone number",
											},
										})}
									/>
								</div>
								{errors.anthorPhone && (
									<p className="text-danger fw-semibold">
										{errors?.anthorPhone?.message}
									</p>
								)}
								<hr className="my-4" />
							</div>
						</div>
						<div className="vr p-0"></div>

						<div className="col">
							<h4 className="my-4 text-dark">Calender</h4>
							<div>
								<p className="lead fs-2 my-3 py-2 text-center text-primary">
									Available Days
								</p>
								<Row className="my-4">
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="sat"
												value={6}
												className="ch1 mx-2"
												defaultChecked={satChecked ? "true" : null}
												onChange={daysHandler}
											></input>
											Saturday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="sun"
												value={0}
												defaultChecked={sunChecked ? "true" : null}
												className="ch1 mx-2"
												onChange={daysHandler}
											></input>
											Sunday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="mon"
												value={1}
												className="ch1 mx-2"
												defaultChecked={monChecked ? "true" : null}
												onChange={daysHandler}
											></input>
											Monday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="tue"
												value={2}
												className="ch1 mx-2"
												defaultChecked={tueChecked ? "true" : null}
												onChange={daysHandler}
											></input>
											Tuesday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="wed"
												value={3}
												className="ch1 mx-2"
												defaultChecked={wedChecked ? "true" : null}
												onChange={daysHandler}
											></input>
											Wednesday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										{" "}
										<p className="label mx-md-0 mx-3">
											<input
												type="checkbox"
												name="thu"
												value={4}
												className="ch1 mx-2"
												onChange={daysHandler}
												defaultChecked={thuChecked ? "true" : null}
											></input>
											Thursday
										</p>
									</Col>
									<Col sm={12} md={6} lg={3}>
										<p className="label mx-md-0 mx-3 mx-1">
											<input
												type="checkbox"
												name="fri"
												value={5}
												className="ch1 mx-2"
												defaultChecked={friChecked ? "true" : null}
												onChange={daysHandler}
											></input>
											Friday
										</p>
									</Col>
									{daysError && (
										<p className="text-danger fw-semibold">
											please select at least one day
										</p>
									)}
								</Row>
							</div>
							<div>
								<p className="lead fs-2 my-3 py-2 text-center text-primary">
									Available Hours
								</p>
								<Row className=" mx-5 mb-4 mt-2">
									<Col sm={12} lg={6}>
										<label className="label">Start Time</label>
										<Form.Control
											type="time"
											name="startTime"
											onSelect={startTimeHandler}
											className="fields"
											{...register("startTime", {
												value: state?.availHours?.startTime,
												required: "Start Time is Required",
											})}
										/>
										{errors.startTime && (
											<p className="text-danger fw-semibold">
												{errors.startTime?.message}
											</p>
										)}
									</Col>
									<Col sm={12} lg={6} className="mt-lg-0 mt-3">
										<label className="label">End Time</label>
										<Form.Control
											type="time"
											name="endTime"
											onSelect={endTimeHandler}
											className="fields"
											{...register("endTime", {
												value: state?.availHours?.endTime,
												required: "End Time is Required",
											})}
										/>
										{errors.endTime && (
											<p className="text-danger fw-semibold">
												{errors.endTime?.message}
											</p>
										)}
									</Col>
								</Row>
							</div>
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
