import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import moment from "moment";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const ReminderWrapper = styled.div`
text-align: center;
margin: 0;
h2 {
  font-size: 1.7em;
  padding-top: 2rem;
}
span {
  padding-left: 1rem;
}
`;

const CalendarWrapper = styled.div`
margin: 0 auto;
width: 70%;
height: 100vh;
`;



const Reminder = ({ jobs }) => {
  //   const [event, setEvent] = useState({ title: "", start: "", end: "" });
  const [events, setEvents] = useState([
    ...jobs.filter((job) => job.date_interview && job),
  ]);
  console.log(events);

  const interviews = [...events].map((event) => ({
    title: event.company,
    start: moment(event["date_interview"]).toDate(),
    end: moment(event["date_interview"]).toDate(),
  }));

 
  console.log(interviews);

  return (
    <>
      <ReminderWrapper>
        <h2>
          <FaIcons.FaCalendarAlt />
          <span>Interview Reminders</span>
        </h2>
        <CalendarWrapper>
          <Calendar
            localizer={localizer}
            events={interviews}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </CalendarWrapper>
      </ReminderWrapper>
    </>
  );
};

export default Reminder;
