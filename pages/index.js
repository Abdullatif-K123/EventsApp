import React, { useEffect } from "react";
import Link from "next/link";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
const index = ({ data }) => {
  console.log(data);
  const eventFeatured = getFeaturedEvents();
  return (
    <div>
      <EventList eventList={eventFeatured} />
    </div>
  );
};

export default index;
export async function getServerSideProps(context) {
  let ans = {};
  try {
    const result = await fetch(
      "https://next-ssr-ssg-default-rtdb.firebaseio.com/events.json"
    );
    ans = result;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      data: ans ? ans : {},
    },
  };
}
