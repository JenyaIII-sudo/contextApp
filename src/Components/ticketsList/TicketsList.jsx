import React, { useContext } from "react";
import styles from "./TicketsList.module.css";
import TicketsTop from "../ticketsTop/TicketsTop";
import Ticket from "../ticket/Ticket";
import UserContext from "../../Contexts/UserContext";

const UserInfo = () => {
  const tikeet = useContext(UserContext);

  console.log("JJJIIIKAAA", tikeet);

  return (
    <div className={styles.ticketsList}>
      <TicketsTop />
      <Ticket data={tikeet} />
    </div>
  );
};

export default UserInfo;
