import React from "react";
import { Person, Chat, Notifications } from "@material-ui/icons";

export default function TopbarBadges({ className, iconClassName }) {
  return (
    <>
      <div className={className}>
        <Person></Person>
        <span className={iconClassName}>1</span>
      </div>
      <div className={className}>
        <Chat></Chat>
        <span className={iconClassName}>1</span>
      </div>
      <div className={className}>
        <Notifications></Notifications>
        <span className={iconClassName}>1</span>
      </div>
    </>
  );
}
