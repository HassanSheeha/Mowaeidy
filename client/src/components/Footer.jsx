import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiUser } from "react-icons/bi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";

export default function Footer() {
	return (
		<>
			<div className="bg-primary text-light">
				<footer className="container py-5">
					<Container>
						<Row>
							<NavLink to="/home" className="px-2 mb-3">
								<img alt="logo" src="Assets/Images/logo.png" width="150px" />
							</NavLink>
						</Row>
						<Row>
							<Col>
								<p className="my-1  w-75 text-white ">
									We take the work out of connecting with others so you can
									accomplish more.
								</p>
								<FiFacebook />
								<FiLinkedin />
								<TbBrandGmail />
							</Col>
							<Col>
								<ul className="nav flex-column text-warning">
									<li className="mb-2">
										<NavLink to="/home" className="p-0 ">
											Home
										</NavLink>
									</li>
									<li className="mb-2">
										<NavLink to="/organizers" className="p-0">
											Organizers
										</NavLink>
									</li>
									<li className="mb-2">
										<NavLink to="/calender" className=" p-0">
											Calender
										</NavLink>
									</li>
								</ul>
							</Col>
							<Col>
								<ul className="nav flex-column text-warning">
									<li className="mb-2">
										<NavLink to="/about" className="p-0">
											About
										</NavLink>
									</li>
									<li className="mb-2">
										<NavLink to="/contact" className="p-0">
											Contact
										</NavLink>
									</li>
									<li className="mb-2">
										<NavLink to="/blogs" className="p-0">
											Blogs
										</NavLink>
									</li>
								</ul>
							</Col>
							<Col>
								<BiUser />
								<h5 className="text-warning mt-1  ">Profile</h5>
								<button className="btn btn-warning" type="button">
									Get Started
								</button>
							</Col>
						</Row>
						<Row>
							<div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 ">
								<h5>
									<span className="text-warning mx-2">&copy;</span>
									Copy Right <span className="text-warning">Mowaeidy</span> 2022
								</h5>
								<ul className="list-unstyled d-flex">
									<li className="ms-3">
										<a className="link-dark" href="/home">
											<svg className="bi" width="24" height="24"></svg>
										</a>
									</li>
									<li className="ms-3">
										<a className="link-dark" href="/home">
											<svg className="bi" width="24" height="24"></svg>
										</a>
									</li>
									<li className="ms-3">
										<a className="link-dark" href="/home">
											<svg className="bi" width="24" height="24"></svg>
										</a>
									</li>
								</ul>
							</div>
						</Row>
					</Container>
				</footer>
			</div>
		</>
	);
}
