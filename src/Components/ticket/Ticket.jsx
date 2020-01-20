import React from "react";
import UserAvatar from "../userAvatar";
import styles from "./Ticket.module.css";

const Ticket = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div className={styles.ticket}>
          <UserAvatar ava={item.owner.avatar} />
          <span className={styles.reportedContent}>{item.reportedTime}</span>
          <span className={styles.assetContent}>{item.asset.name}</span>
          <button className={styles.statusButton}>{item.status}</button>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
