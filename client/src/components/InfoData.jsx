import React, { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getinfo } from "../store/reducer/InfoSlice";

export default function InfoData() {
	const dispatch = useDispatch();
	const { infos } = useSelector((state) => state.info);

	
	// loading data
	useEffect(() => {
		dispatch(getinfo());
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			{/* table header */}
			<div className="container text-center my-4">
				<h2 className="text-primary">Website Information</h2>
			</div>
			{/* edit button */}
			<div className="container d-flex justify-content-end ">
				<a className="btn border-0 p-0" href="info/edit">
					<AiFillEdit className="fs-4 text-info" />
				</a>
			</div>

			<Form className="container mt-3 text-center  bg-secondary text-white py-3">
				<Row className="align-items-center justify-content-center mb-3">
					<Form.Label as={Col} sm="12" md="2" lg="1">
						Phone
					</Form.Label>
					<Form.Group as={Col} sm="12" md="4" controlId="formGridPhone">
						<Form.Control
							type="text"
							name="contactPhones"
							placeholder="phone number"
							defaultValue={infos[0]?.contactPhones}
						/>
					</Form.Group>
					<Form.Label as={Col} sm="12" md="2" lg="1">
						Email
					</Form.Label>
					<Form.Group as={Col} sm="12" md="4" controlId="formGridPassword">
						<Form.Control
							type="email"
							name="socialMediaLinks.email"
							placeholder="Email"
							defaultValue={infos[0]?.socialMediaLinks.email}
						/>
					</Form.Group>
				</Row>
				<Row className="align-items-center justify-content-center mb-3">
					<Form.Label as={Col} sm="12" md="2" lg="1">
						facebook
					</Form.Label>
					<Form.Group as={Col} sm="12" md="4" controlId="formGridFacebook">
						<Form.Control
							type="text"
							name="socialMediaLinks.facebook"
							placeholder="Facebook Link"
							defaultValue={infos[0]?.socialMediaLinks.facebook}
						/>
					</Form.Group>
					<Form.Label as={Col} sm="12" md="2" lg="1">
						linkedin
					</Form.Label>
					<Form.Group as={Col} sm="12" md="4" controlId="formGridLinkedin">
						<Form.Control
							type="text"
							name="socialMediaLinks.linkedin"
							placeholder="Linkedin Link"
							defaultValue={infos[0]?.socialMediaLinks.linkedin}
						/>
					</Form.Group>
				</Row>
				<Row className="align-items-center justify-content-center mb-3">
					<Form.Group
						as={Col}
						sm="12"
						lg="10"
						className="mb-3"
						controlId="formGridAbout"
					>
						<Form.Label>About Us</Form.Label>
						<Form.Control
							as="textarea"
							type="text"
							name="aboutUs"
							placeholder="About us"
							defaultValue={infos[0]?.aboutUs}
						/>
					</Form.Group>
				</Row>
				<Row className="align-items-center justify-content-center mb-3">
					<Form.Group as={Col} sm="12" md="6" lg="5" controlId="formGridFree">
						<Form.Label>Free price</Form.Label>
						<Form.Control
							type="text"
							name="prices.free.featureOne"
							placeholder="free featureOne"
							className="mb-3"
							defaultValue={infos[0]?.prices.free.featureOne}
						/>
						<Form.Control
							type="text"
							name="prices.free.featureTwo"
							placeholder="free featureTwo"
							className="mb-3"
							defaultValue={infos[0]?.prices.free.featureTwo}
						/>
						<Form.Control
							type="text"
							name="prices.free.featureThree"
							placeholder="free featureThree"
							className="mb-3"
							defaultValue={infos[0]?.prices.free.featureThree}
						/>
						<Form.Control
							type="text"
							name="prices.free.price"
							placeholder="free price"
							className="mb-3"
							defaultValue={infos[0]?.prices.free.price}
						/>
					</Form.Group>
					<Form.Group
						as={Col}
						sm="12"
						md="6"
						lg="5"
						controlId="formGridPremium"
					>
						<Form.Label>premium price</Form.Label>
						<Form.Control
							type="text"
							name="prices.premium.featureOne"
							placeholder="premium featureOne"
							className="mb-3"
							defaultValue={infos[0]?.prices.premium.featureOne}
						/>
						<Form.Control
							type="text"
							name="prices.premium.featureTwo"
							placeholder="premium featureTwo"
							className="mb-3"
							defaultValue={infos[0]?.prices.premium.featureTwo}
						/>
						<Form.Control
							type="text"
							name="prices.premium.featureThree"
							placeholder="premium featureThree"
							className="mb-3"
							defaultValue={infos[0]?.prices.premium.featureThree}
						/>
						<Form.Control
							type="text"
							name="prices.premium.price"
							placeholder="premium price"
							className="mb-3"
							defaultValue={infos[0]?.prices.premium.price}
						/>
					</Form.Group>
				</Row>
			</Form>
		</div>
	);
}
