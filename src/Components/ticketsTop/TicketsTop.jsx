import React from "react";
import styles from "./TicketsTop.module.css";

const TicketsTop = () => {
  return (
    <div className={styles.ticketsTop}>
      <div className={styles.colum}>
        <span>Owner</span>
      </div>
      <div className={styles.colum}>
        <span>Reported</span>
      </div>
      <div className={styles.colum}>
        <span>Asset</span>
      </div>
      <div className={styles.colum}>
        <span>Status</span>
      </div>
    </div>
  );
};

export default TicketsTop;
