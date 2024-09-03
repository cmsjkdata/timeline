import React, { useContext } from "react";
import { TimelineContext } from "./TimelineContext";
import Event from "./Event";

const Timeline = () => {
  const { events, setEvents } = useContext(TimelineContext);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handleDrop = (e, hour) => {
    e.preventDefault();
    const event = JSON.parse(e.dataTransfer.getData("event"));

    // Update the start hour of the dropped event
    setEvents((prevEvents) =>
      prevEvents.map((ev) => (ev.id === event.id ? { ...ev, startHour: hour } : ev))
    );
  };

  const handleDragStart = (e, event) => {
    e.dataTransfer.setData("event", JSON.stringify(event));
  };

  const handleDelete = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="timeline">
      {hours.map((hour) => (
        <div
          key={hour}
          className="hour-marker"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, hour)}
        >
          {`${hour}:00`}
          {events
            .filter((event) => event.startHour === hour)
            .map((event) => (
              <Event
                key={event.id}
                event={event}
                onDragStart={handleDragStart}
                onDelete={handleDelete}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
