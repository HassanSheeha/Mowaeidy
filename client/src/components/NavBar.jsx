// import React from 'react'
// import { BiUser } from "react-icons/bi";
// import { Navbar, Nav, Container } from "react-bootstrap";

// export default function NavBar() {
//   return (
//     <>
//   <Navbar className="py-1 navbar navbar-expand-lg navbar-light fixed-top " >
// 		<Container>

// 		<Navbar.Brand href="/moaidy">
//        <img src="Assets/Images/2.png" alt="Bootstrap" width="200" height="200"/>
// 	 </Navbar.Brand>

// 			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
// 			<Navbar.Collapse id="responsive-navbar-nav">
// 			<Nav className="m-auto ">
// 				<Nav.Link className="py-lg-3 mx-2 fw-bold text-white  " href="/home">
// 				Home
// 				</Nav.Link>
//                 <Nav.Link className="py-lg-3 mx-2 fw-bold text-white" href="/blog">
// 				Blog
// 				</Nav.Link>
// 				<Nav.Link className="py-lg-3 mx-2 fw-bold text-white" href="/organizers">
//                 Organizers
// 				</Nav.Link>
// 				<Nav.Link className="py-lg-3 mx-2 fw-bold text-white" href="/calender">
// 				Calender
// 				</Nav.Link>
// 				<Nav.Link className="py-lg-3 mx-2 fw-bold text-white" href="/about">
// 				About
// 				</Nav.Link>
//                 <Nav.Link className="py-lg-3 mx-2 fw-bold text-white" href="/contact">
// 				Contact
// 				</Nav.Link>
// 				</Nav>
// 			</Navbar.Collapse>

//             <Navbar.Brand  className="mx-5 p-5 " href="/login">
//                 <  BiUser />
// 	             </Navbar.Brand>
// 		</Container>
// 	</Navbar>

//   </>
//   )
// }

import React from "react";
import { BiUser } from "react-icons/bi";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useLocation } from "react-router-dom";

export default function NavBar() {
	const [background, setBackground] = React.useState("transparent");
	let location = useLocation();

	const navScroll = () => {
		if (window.scrollY > 0) {
			setBackground("primary");
		} else {
			setBackground("transparent");
		}
	};
	// eslint-disable-next-line
	React.useEffect(() => {
		if (location.pathname !== "/home" && location.pathname !== "/") {
			setBackground("primary");
		}
		window.addEventListener("scroll", navScroll);
	});
	return (
		<>
			<Navbar
				className="py-0  w-100"
				collapseOnSelect
				expand="lg"
				sticky="top"
				bg={background}
			>
				<Container>
					<Navbar.Brand href="/moaidy">
						<img src="Assets/Images/21.png" alt="Bootstrap" width="100px" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link
								className=" bg-warning py-lg-3 mx-2 rounded border-warm text-secondary"
								style={{ border: "2px solid orange", color: "orange" }}
								href="/home"
							>
								Home
							</Nav.Link>
							<Nav.Link className="py-lg-3 mx-2" href="/blog">
								Blog
							</Nav.Link>
							<Nav.Link className="py-lg-3 mx-2" href="/organizers">
								Organizers
							</Nav.Link>
							<Nav.Link className="py-lg-3 mx-2" href="/calender">
								Calender
							</Nav.Link>
							<Nav.Link className="py-lg-3 mx-2" href="/about">
								About
							</Nav.Link>
							<Nav.Link className="py-lg-3 mx-2" href="/Contact">
								Contact
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
