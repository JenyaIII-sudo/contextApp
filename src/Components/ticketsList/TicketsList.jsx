import React from "react";
import styles from "./TicketsList.module.css";
import TicketsTop from "../ticketsTop/TicketsTop";
import Ticket from "../ticket/Ticket";

const UserInfo = () => {
  return (
    <div className={styles.ticketsList}>
      <TicketsTop />
      <Ticket />
    </div>
  );
};

export default UserInfo;
