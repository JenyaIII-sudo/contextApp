import React, { useContext } from "react";
import styles from "./Tickets.module.css";
import SearchBar from "../Components/searchBar";
import TicketsContainer from "../Components/ticketsContainer";
import UserContext from "../Contexts/UserContext";

const Tickets = () => {
  const tickets = useContext(UserContext);
  console.log("TIKIT", tickets);
  return (
    <div className={styles.ticketsPage}>
      <h3>Tickets</h3>
      <SearchBar />
      <TicketsContainer />
    </div>
  );
};

export default Tickets;
