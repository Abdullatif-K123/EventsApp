import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventIdInfo = getEventById(eventId);
  if (!eventIdInfo) {
    return (
      <ErrorAlert>
        <p>Not Found 404 </p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={eventIdInfo.title} />
      <EventLogistics
        date={eventIdInfo.date}
        address={eventIdInfo.location}
        image={eventIdInfo.image}
        imageAlt={eventIdInfo.title}
      />
      <EventContent>
        <p>{eventIdInfo.description}</p>
      </EventContent>
    </>
  );
};

export default EventPage;
