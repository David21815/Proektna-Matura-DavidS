import React from "react";

const SideBar = ({ show, children }) => {
  const sidebarStyle = {
    width: "250px",
    left: show ? "0" : "-250px",
    transition: "left 0.5s ease-in-out",
    position: "fixed",
    top: "0",
    height: "100%",
    zIndex: 1000,
    backgroundColor: "#AA96DA",
  };

  return (
    <div style={sidebarStyle}>
      {children}
    </div>
  );
};

export default SideBar;
