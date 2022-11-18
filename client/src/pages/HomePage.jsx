import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Reminder from "../components/Reminder";
import Coming from "../components/Coming";
import Schedule from "../components/Schedule";
import Number from "../components/Number";
import Availability from "../components/Availability";
import Appointment from "../components/Appointment";
import Industry from "../components/Industry";
import Img from "../components/Img";
import Subscribe from "../components/Subscribe";
import Features from "../components/Features";
import MainBlog from "../components/MainBlog";

export default function HomePage() {
	return (
		<>
			<Hero></Hero>
			<br></br>
			<Features></Features>
			<br></br>
			<Content></Content>
			<br></br>
			<Reminder></Reminder>
			<br></br>
			<Coming></Coming>
			<br></br>
			<Schedule></Schedule>
			<br></br>
			<Number></Number>
			<br></br>
			<Availability></Availability>
			<br></br>
			<br></br>
			<Appointment></Appointment>
			<br></br>
			<Industry></Industry>
			<br></br>
			<Img></Img>
			<br></br>
			<MainBlog></MainBlog>
			<br></br>
			<Img></Img>
			<br></br>
			<Subscribe></Subscribe>
		</>
	);
}
