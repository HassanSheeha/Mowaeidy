import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Features.css";

export default function Features() {
	const features = [
		{
			image: "Assets/Images/6.png",
			title: "Manage Customers",
			body: "Manage Your Customer data. Their appointment history all in	one place",
		},
		{
			image: "Assets/Images/8.png",
			title: "Reminders",
			body: "Avoid no-shows & missed appointments..",
		},
		{
			image: "Assets/Images/7.png",
			title: "Reviews",
			body: "Get the right feedback from Customers..",
			subTitle: "(COMING SOON)",
		},
		{
			image: "Assets/Images/9.png",
			title: "Take Payment",
			body: "Support Cash and Card Payment right from your picktime calender..",
			subTitle: "(COMING SOON)",
		},
		{
			image: "Assets/Images/10.png",
			title: "Book Widget",
			body: "Turn your website into a booking engine..",
			subTitle: "(COMING SOON)",
		},
		{
			image: "Assets/Images/11.png",
			title: "Multiple Locations",
			body: "Check what is going on in all your bussiness locations at a glance..",
		},
	];
	return (
		<>
			<Container>
				<Row xs={1} md={2} lg={3}>
					{features.map((ft) => {
						return (
							<Col className="mb-3">
								<Card className="ft-card border-0">
									<Card.Img
										className="my-3 ft-card-img"
										variant="top"
										src={ft.image}
									/>
									<Card.Body className="d-flex flex-column justify-content-between">
										<Card.Title className="text-primary text-bold">
											<span className="border-2 pb-1 border-primary border-bottom">{ft.title}</span>
										</Card.Title>
										<Card.Text className="text-muted lead">{ft.body}</Card.Text>
										<Card.Text className="text-primary fs-6">
											{ft.subTitle}
										</Card.Text>
										<h5 className=" text-warning  text-end">
											<NavLink to="/signUp">More</NavLink>
										</h5>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>

			<div className="col-12 col-md-12 col-lg-4 mt-3 ">
				<Card className="bg-primary  text-bold pb-2">
					<Card.Img
						className=" mt-3  mx-auto"
						variant="top"
						style={{ width: "8rem" }}
						src="Assets/Images/8.png"
					/>
				</Card>
			</div>
		</>
	);
}
