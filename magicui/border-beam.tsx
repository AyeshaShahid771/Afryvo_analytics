import React from "react";

export const BorderBeam = ({ duration = 6, size = 200, className = "" }) => {
  // This is a placeholder. Replace with your own effect if needed.
  return (
    <div
      className={`border-2 border-dashed border-yellow-700 rounded-2xl ${className}`}
      style={{
        width: size,
        height: size,
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      {/* Decorative border beam effect */}
    </div>
  );
};
