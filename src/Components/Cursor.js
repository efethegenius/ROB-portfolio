import React from "react";

export const Cursor = () => {
  let darkModeStatus;
  darkModeStatus = localStorage.getItem("dark-mode");
  return (
    <section className="cursor-container">
      <div
        className={
          darkModeStatus === "enabled"
            ? "dark-outer-cursor"
            : darkModeStatus === "disabled"
            ? "outer-cursor"
            : "outer-cursor"
        }
      >
        <div className="inner-cursor">
          <div className="cursor"></div>
        </div>
      </div>
    </section>
  );
};
