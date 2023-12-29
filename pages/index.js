import React from "react";
import Link from "next/link";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
const index = () => {
  const eventFeatured = getFeaturedEvents();
  return (
    <div>
      <h1>This will be the featured Events</h1>{" "}
      <EventList eventList={eventFeatured} />
    </div>
  );
};

export default index;
