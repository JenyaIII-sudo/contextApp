import React from "react";
import styles from "./TicketsContainer.module.css";
import Owner from "../owner";
import TicketsList from "../ticketsList";

const TicketsContainer = () => {
  return (
    <div className={styles.list}>
      <TicketsList />
      <Owner />
    </div>
  );
};

export default TicketsContainer;
