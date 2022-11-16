import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import { v4 as uuid } from "uuid";
import { infoAPI } from "../API/AdminPanelApi";
import { appointmentAPI } from "../API/AppointmentAPI";
import { useDispatch } from "react-redux";

export default function OrgViewCalneder({ organizer }) {
	const { getDisapledAppointments } = appointmentAPI;
	const navigate = useNavigate();
	const [eventInfo, setEventInfo] = useState();
	let now = new Date();
	let availTime = new Date();
	availTime = availTime.setMonth(now.getMonth() + 1);
	
	// setting calender events
	const [organizerEvents, setOrganizerEvents] = useState([]);
	const [events, setEvents] = useState([
		// denay access to previous times
		{
			start: new Date("1822-01-01"),
			end: now,
			title: "hassan",
			display: "background",
			backgroundColor: "gray",
		},
		// denay access to times after one month
		{
			start: availTime,
			end: new Date("3022-01-01"),
			title: "hassan",
			display: "background",
			backgroundColor: "gray",
		},
	]);

	const businessHours = {
		daysOfWeek: organizer?.availDays,
		startTime: organizer?.availHours?.startTime, // a start time
		endTime: organizer?.availHours?.endTime, // an end time
		color: "green",
	};

	const addApp = (info) => {
		if (!info.allDay && info.start > now && info.end < availTime) {
			setEventInfo(info);
			navigate("/organizers/view/addAppointment");
		}
	};
	// const handleSelect = (info) => {
	// 	console.log(info);
	// 	const { start, end } = info;
	// 	const eventNamePrompt = prompt("Enter, event name");
	// 	if (eventNamePrompt) {
	// 		setEvents([
	// 			...events,
	// 			{
	// 				start,
	// 				end,
	// 				title: eventNamePrompt,
	// 				id: uuid(),
	// 			},
	// 		]);
	// 	}
	// 	console.log(events);
	// };
	useEffect(() => {
		getAppointments();
		// eslint-disable-next-line
	}, []);

	// denay access to current organizer event
	const getAppointments = async () => {
		try {
			const res = await getDisapledAppointments(organizer?._id);
			if (res?.data?.message === "error") {
				navigate("/organizers");
			} else {
				console.log(res.data);
				res?.data.map((oneApp) => {
					console.log(oneApp);
					setOrganizerEvents((organizerEvents) => [
						...organizerEvents,
						{
							start: oneApp?.appStartDateTime,
							end: oneApp?.appEndDateTime,
							display: "background",
							backgroundColor: "red",
							id: oneApp?.appID,
						},
					]);
				});
				console.log(organizerEvents);
			}
		} catch (err) {}
	};

	return (
		<>
			<FullCalendar
				plugins={[
					daygridPlugin,
					interactionPlugin,
					timeGridPlugin,
					momentPlugin,
				]}
				firstDay="6" //starts with saturday
				allDaySlot={false}
				selectConstraint={"businessHours"}
				selectOverlap={false}
				views={["dayGridMonth", "timeGridWeek", "timeGridDay"]} //the avail views
				headerToolbar={{
					start: "today prev next",
					end: "dayGridMonth timeGridWeek timeGridDay",
				}}
				selectMirror={true} //placeholder
				events={(events, organizerEvents)} //show events in calender
				businessHours={businessHours}
				selectable //enable select date
				select={addApp} //selected date callback
				// validRange={{
				// 	start: now,
				// 	end: availTime,
				// }}
				// eventClick={addApp}
				// initialView={"timeGridFourDay"}
			/>
			<Outlet context={{ eventInfo, organizer }} />
		</>
	);
}
