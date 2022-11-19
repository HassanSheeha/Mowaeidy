import React, { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<>
			<Navbar
				className="bg-primary w-100"
				collapseOnSelect
				expand="lg"
				sticky="top"
			>
				<Container>
					<Navbar.Brand>
						<NavLink to="/home">
							<img src="Assets/Images/logo.png" alt="Mowaeidy" width="100px" />
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="m-auto">
							<NavLink
								to="/home"
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
							>
								Home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
								to="/organizers"
							>
								Organizers
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
								to="/calender"
							>
								Calender
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
								to="/about"
							>
								About
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
								to="/contact"
							>
								Contact
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "test py-lg-3 mx-2 px-2 text-white"
										: "py-lg-3 mx-2 text-white"
								}
								to="/blogs"
							>
								Blog
							</NavLink>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand className="pt-0">
						<NavLink
							className={({ isActive }) =>
								isActive ? "fs-2 text-white" : "fs-3 text-warning"
							}
							to="/login"
						>
							<BiUser className="border border-2 rounded border-warning" />
						</NavLink>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}
