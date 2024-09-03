import React, { useState, useContext } from "react";
import { TimelineContext } from "./TimelineContext";

const AddEventForm = () => {
  const { events, setEvents } = useContext(TimelineContext);
  const [name, setName] = useState("");
  const [startHour, setStartHour] = useState(0);
  const [duration, setDuration] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      name,
      startHour: parseInt(startHour),
      endHour: parseInt(startHour) + parseInt(duration),
    };
    setEvents([...events, newEvent]);
    setName("");
    setStartHour(0);
    setDuration(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Start Hour"
        value={startHour}
        onChange={(e) => setStartHour(e.target.value)}
        min="0"
        max="23"
        required
      />
      <input
        type="number"
        placeholder="Duration (hours)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        min="1"
        max="24"
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
