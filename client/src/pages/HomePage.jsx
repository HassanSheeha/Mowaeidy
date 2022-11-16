import React from "react";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Content from "../components/Content";
import Reminder from "../components/Reminder";
import Coming from "../components/Coming";
import Schedule from "../components/Schedule";
import Number from "../components/Number";
import Availability from "../components/Availability";
import Appointment from "../components/Appointment";
import Industry from "../components/Industry";
import Img from "../components/Img";
import About from "../components/About";
import Teams from "../components/Teams";
import Subscribe from "../components/Subscribe";

export default function HomePage() {
	return (
		<>
			<Hero></Hero>
			<br></br>
			<Blog></Blog>
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
			<Teams></Teams>
			<br></br>
			<Img></Img>
			<br></br>
			<Subscribe></Subscribe>
			<br></br>
			<About></About>
			<br></br>
		</>
	);
}
