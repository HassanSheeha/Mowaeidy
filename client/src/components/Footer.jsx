import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import { BiUser } from "react-icons/bi";
export default function Footer() {
	return (
		<div>
			<CDBFooter className="shadow bg-primary">
				<CDBBox
					display="flex"
					flex="column"
					className="mx-auto py-4"
					style={{ width: "90%" }}
				>
					<CDBBox display="flex" justifyContent="between" className="flex-wrap">
						<CDBBox>
							<a href="/" className="d-flex align-items-center p-0 text-dark">
								<img alt="logo" src="Assets/Images/2.png" width="150px" />
							</a>
							<p className="my-1 mt-2 text-white " style={{ width: "300px" }}>
								We take the work out of connecting with others so you can
								accomplish more.
							</p>
							<CDBBox display="flex" className="mt-4">
								<CDBBtn flat color="primary">
									<CDBIcon fab icon="facebook-f" />
								</CDBBtn>
								<CDBBtn flat color="danger" className="mx-3 ">
									<CDBIcon fab icon="google" />
								</CDBBtn>
							</CDBBox>
						</CDBBox>
						<CDBBox>
							<div
								className="h5 mb-5 "
								style={{ fontWeight: "600", textDecoration: "none" }}
							></div>
							<CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
								<CDBFooterLink href="/">Home</CDBFooterLink>
								<br></br>
								<CDBFooterLink href="/">Industries</CDBFooterLink>
								<br></br>
								<CDBFooterLink href="/">Organizers</CDBFooterLink>
								<br></br>
								<CDBFooterLink href="/">Calender</CDBFooterLink>
							</CDBBox>
						</CDBBox>
						<CDBBox>
							<div className="h5 mb-5 " style={{ fontWeight: "600" }}></div>
							<CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
								<CDBFooterLink href="/">Contact</CDBFooterLink>
								<br></br>
								<CDBFooterLink href="/">About</CDBFooterLink>
							</CDBBox>
						</CDBBox>
						<CDBBox>
							<div
								className="h5 mb-5 ms-5 me-5 mt-5"
								style={{ fontWeight: "400" }}
							>
								<BiUser />
								<h5 className="text-warning mt-1  ">Profile</h5>
							</div>
							<button
								className=" btn btn-warning text-white p-2 mt-5 ms-1 me-5 px-5"
								style={{ marginLeft: "1px" }}
							>
								Get Started
							</button>
						</CDBBox>
					</CDBBox>

					<h5 className="text-center mt-5">
						{" "}
						<span className="text-warning" style={{ width: "100px" }}>
							&copy;
						</span>{" "}
						Copy Right <span className="text-warning">Mowaeidy</span> 2022
					</h5>
				</CDBBox>
			</CDBFooter>
		</div>
	);
}
