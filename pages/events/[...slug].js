import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
const FilterEvent = () => {
  const router = useRouter();
  const filtering = router.query.slug;

  if (!filtering) {
    return <p>Loading...</p>;
  }
  const objFilter = { year: +filtering[0], month: +filtering[1] };
  const resultFilter = getFilteredEvents(objFilter);
  if (isNaN(objFilter.year) || isNaN(objFilter.month)) {
    return (
      <ErrorAlert>
        <p>Invalid filter. Please adjust your valuse</p>
      </ErrorAlert>
    );
  }
  if (!resultFilter.length) {
    return (
      <ErrorAlert>
        <p>No events found for such filter</p>
      </ErrorAlert>
    );
  }
  const date = new Date(objFilter.year, objFilter.month - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList eventList={resultFilter} />
    </div>
  );
};

export default FilterEvent;
