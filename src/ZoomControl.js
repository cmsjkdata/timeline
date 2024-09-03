import React, { useContext } from "react";
import { TimelineContext } from "./TimelineContext";

const ZoomControl = () => {
  const { zoomLevel, setZoomLevel } = useContext(TimelineContext);

  const handleZoomIn = () => setZoomLevel(zoomLevel + 1);
  const handleZoomOut = () => setZoomLevel(zoomLevel - 1);

  return (
    <div className="zoom-controls">
      <button onClick={handleZoomOut}>-</button>
      <span>{zoomLevel}%</span>
      <button onClick={handleZoomIn}>+</button>
    </div>
  );
};

export default ZoomControl;
