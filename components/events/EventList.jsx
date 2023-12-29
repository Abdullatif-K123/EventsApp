import React from "react";
import EventItem from "./EventItem";
import classes from "./event-list.module.css";
const EventList = ({ eventList }) => {
  return (
    <div>
      <ul className={classes.list}>
        {eventList.map((eventItem) => {
          return <EventItem key={eventItem.id} singleEvent={eventItem} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
