import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

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

const Reminder = ({ jobs }) => {
  //   const [event, setEvent] = useState({ title: "", start: "", end: "" });
  const [events, setEvents] = useState([
    ...jobs.filter((job) => job.date_interview && job),
  ]);
  console.log(events);

  const interviews = events.map((event) => ({
    title: event.company,
    start: event.date_interview,
    end: event.date_interview,
  }));

  console.log(interviews);

  return (
    <>
      <div>
        <h1>Reminder</h1>
        <h1>Calendar</h1>
        <Calendar
          localizer={localizer}
          events={interviews}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </>
  );
};

export default Reminder;
