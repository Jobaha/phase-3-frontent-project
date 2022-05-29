import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">PMD</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
