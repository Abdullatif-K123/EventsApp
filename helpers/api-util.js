export async function getAllEvents() {
  try {
    const response = await fetch(
      "https://next-ssr-ssg-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    console.log(data);
    console.log("I'm in tyr catch");
    const events = [];
    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }

    return events;
  } catch (error) {
    console.log("Hello");
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}
