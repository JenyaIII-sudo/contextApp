import React from "react";
import UserAvatar from "../userAvatar";
import styles from "./Ticket.module.css";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <UserAvatar />
      <span className={styles.reportedContent}>1994/26/07</span>
      <span className={styles.assetContent}>Sign</span>
      <button className={styles.statusButton}>Com</button>
    </div>
  );
};

export default Ticket;
