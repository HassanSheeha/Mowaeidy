import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import { appointmentAPI } from "../API/AppointmentAPI";

export default function OrgPersonalCalender({ organizer }) {
	const { getDisapledAppointments } = appointmentAPI;
	const navigate = useNavigate();
	// const [eventInfo, setEventInfo] = useState();

	// setting calender events
	const [organizerEvents, setOrganizerEvents] = useState([]);

	const businessHours = {
		daysOfWeek: organizer?.availDays,
		startTime: organizer?.availHours?.startTime, // a start time
		endTime: organizer?.availHours?.endTime, // an end time
		color: "green",
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
				res?.data.map((oneApp) => {
					setOrganizerEvents((organizerEvents) => [
						...organizerEvents,
						{
							start: oneApp?.appStartDateTime,
							end: oneApp?.appEndDateTime,
							backgroundColor: "green",
              title:"sheeha",
							id: oneApp?.appID,
						},
					]);
				});
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
				allDaySlot={false} //to hide all day slot
				dayMaxEventRows={true}
				views={["dayGridMonth", "timeGridWeek", "timeGridDay"]} //the avail views
				eventTimeFormat={{
					hour: "numeric",
					minute: "2-digit",
					meridiem: "short",
				}}
				headerToolbar={{
					start: "today prev next",
					end: "dayGridMonth timeGridWeek timeGridDay",
				}}
				events={organizerEvents} //show events in calender
				businessHours={businessHours}//apply bussines hours
				// eventClick={addApp}
				// initialView={"timeGridFourDay"}
			/>
			{/* <Outlet context={{ eventInfo, organizer }} /> */}
		</>
	);
}