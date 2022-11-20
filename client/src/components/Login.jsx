import React from "react";
import { Form, Col, Row, Alert } from "react-bootstrap";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { userAPI } from "../API/AuthenticationAPI";
export default function Login() {
	const { loginUser } = userAPI;
	const [user, setUser] = useState();
	const [msg, setMsg] = useState("");
	const [alert, setAlert] = useState();
	const navigate = useNavigate();
	const notMemberHandler = () => {
		navigate("/SignUp");
	};
	const [check, setCheck] = useState();
	const adminCheckHandler = (e) => {
		if (e.target.checked) {
			setCheck(true);
		} else {
			setCheck(false);
		}
	};
	const loginHandler = async (data) => {
		//console.log(data)
		let userexist = { ...data, admin: check };
		try {
			let res = await loginUser(userexist);
			console.log(res);
			if (res?.data?.message === "invalid acount") {
				setMsg("invalid acount");
				setAlert(true);
			} else if (res?.data?.message === "sorry you email or pass is error") {
				setMsg("invalid email or password");
				setAlert(true);
			} else if (res?.data?.message === "take your token") {
				localStorage.setItem("token", res?.data?.token);
				setMsg("welome");
				setAlert(true);
				setTimeout(() => {
						navigate("/home");
				}, 3000);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		loginHandler(data);
		//console.log(data);
	};

	return (
		<div className="container container-fluid container-login">
			<div className="row d-flex justify-content-center ">
				<div className=" col-md-6 col-lg-6 ">
					<img
						src="/Assets/Images/register.png"
						alt="booster"
						className="booster-login img-fluid"
					></img>
				</div>
				<div className=" form-login col-md-6 col-lg-6">
					<h6 className="text-dark fs-6 mt-5 ms-auto col-lg-5">
						not a member ?
						<span className="text-primary fs-6" onClick={notMemberHandler}>
							Register Now
						</span>
					</h6>
					<div className="mb-5">
						<h1 className="head fs-1 mt-5">Hello Again!</h1>
						<span className="text-secondary fs-6 mt-1">
							Welcome back , you've been missed!
						</span>
					</div>
					<Form className="contact-form mx-5" onSubmit={handleSubmit(onSubmit)}>
						<Row className="row mx-5">
							<Col className=" mx-5 col-md-6 col-sm-6 col-lg-9">
								<span className="label"> </span>
								<Form.Control
									className="fields"
									type="text"
									name="email"
									placeholder="Enter Your Email"
									{...register("email", {
										required: "Email is Required",
										pattern: {
											value:
												/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: "Please enter a valid email",
										},
									})}
								/>
								{errors.email && (
									<p className="text-danger text-semiold">
										{errors.email?.message}
									</p>
								)}
							</Col>
						</Row>

						<Row className="row mx-5 mt-2">
							<Col className=" mx-5 col-md-6 col-sm-6 col-lg-9">
								<label className="label"></label>
								<Form.Control
									className="fields"
									type="password"
									placeholder="Password"
									name="password"
									{...register("password", {
										required: "you must specify password",
										minLength: {
											value: 8,
											message: "Password must have at least 8 characters",
										},
									})}
								/>
								{errors.password && (
									<p className="text-danger">{errors.password?.message}</p>
								)}
							</Col>
						</Row>

						<Row className="row mx-5 mt-1">
							<Col className=" mx-5 ">
								<button
									className="signIn col-md-6 col-sm-6 col-lg-9"
									onSubmit={loginHandler}
								>
									Sign In
								</button>
								<p className=" check1 mt-5">
									Sign up as an
									<span className="check">Admin</span> ?
									<input
										className="mx-2"
										type="checkbox"
										id="adminCheck"
										onClick={adminCheckHandler}
									></input>
								</p>
							</Col>
							{alert && (
								<Alert
									className="position-fixed text-center mx-3 bottom-0 start-0 w-25"
									variant="success"
								>
									{msg}
								</Alert>
							)}
						</Row>

						<Row></Row>
					</Form>
				</div>
			</div>
		</div>
	);
}
