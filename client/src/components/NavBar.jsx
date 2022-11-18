import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useLocation } from "react-router-dom";

export default function NavBar() {
	const [pages, setPages] = useState({
		isHome: false,
		isOrganizers: false,
		isAbout: false,
		isContact: false,
		isBlog: false,
	});
	let location = useLocation();

	// eslint-disable-next-line
	React.useEffect(() => {
		setActive();
	},[]);
	const setActive = () => {
		let currentLocation = location.pathname.slice(1);
		let hasSlach = currentLocation.indexOf("/");
		if (hasSlach == -1) {
			currentLocation = currentLocation;
		} else {
			currentLocation = currentLocation.slice(0, hasSlach);
		}
		switch (currentLocation) {
			case "home":
				setPages({
					...pages,
					isHome: true,
				});
				break;
			case "organizers":
				setPages({
					...pages,
					isOrganizers: true,
				});
				break;
			case "calender":
				setPages({
					...pages,
					isCalender: true,
				});
				break;
			case "about":
				setPages({
					...pages,
					isAbout: true,
				});
				break;
			case "contact":
				setPages({
					...pages,
					isContact: true,
				});
				break;
			case "blogs":
				setPages({
					...pages,
					isBlog: true,
				});
				break;
			default:
				setPages({
					...pages,
					isHome: true,
				});
				break;
		}
	};
	return (
		<>
			<Navbar
				className="py-0 bg-primary w-100"
				collapseOnSelect
				expand="lg"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="/moaidy">
						<img src="Assets/Images/21.png" alt="Bootstrap" width="100px" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link
								active={pages.isHome}
								className=" py-lg-3 mx-2 text-secondary"
								href="/home"
							>
								Home
							</Nav.Link>
							<Nav.Link
								active={pages.isOrganizers}
								className="py-lg-3 mx-2"
								href="/organizers"
							>
								Organizers
							</Nav.Link>
							<Nav.Link
								active={pages.isCalender}
								className="py-lg-3 mx-2"
								href="/calender"
							>
								Calender
							</Nav.Link>
							<Nav.Link
								active={pages.isAbout}
								className="py-lg-3 mx-2"
								href="/about"
							>
								About
							</Nav.Link>
							<Nav.Link
								active={pages.isContact}
								className="py-lg-3 mx-2"
								href="/contact"
							>
								Contact
							</Nav.Link>
							<Nav.Link
								active={pages.isBlog}
								className="py-lg-3 mx-2"
								href="/blogs"
							>
								Blog
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand
						className="mx-5"
						style={{
							padding: "0 5px",
							border: "1px solid orange",
							color: "orange",
						}}
						href="/login"
					>
						<BiUser />
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}
