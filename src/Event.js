import React from "react";

const Event = ({ event, onDragStart, onDelete }) => {
  return (
    <div
      className="event"
      style={{ left: `${event.position}%` }}
      draggable
      onDragStart={(e) => onDragStart(e, event)}
      data-label={`${event.name} (${event.startHour}:00 - ${event.endHour}:00)`}
    >
      |
    </div>
  );
};

export default Event;
