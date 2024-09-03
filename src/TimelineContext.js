import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <TimelineContext.Provider value={{ events, setEvents, zoomLevel, setZoomLevel }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;
