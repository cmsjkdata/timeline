import "./App.css";

import React from "react";
import TimelineProvider from "./TimelineContext";
import Timeline from "./Timeline";
import ZoomControl from "./ZoomControl";
import AddEventForm from "./AddEventForm"; // Import the form

function App() {
  return (
    <TimelineProvider>
      <div className="app">
        <AddEventForm /> {/* Include the form */}
        <ZoomControl />
        <Timeline />
      </div>
    </TimelineProvider>
  );
}

export default App;
