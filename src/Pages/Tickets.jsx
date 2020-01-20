import React from "react";
import styles from "./Tickets.module.css";
import SearchBar from "../Components/searchBar";
import TicketsContainer from "../Components/ticketsContainer";

const Tickets = () => {
  return (
    <div className={styles.ticketsPage}>
      <h3>Tickets</h3>
      <SearchBar />
      <TicketsContainer />
    </div>
  );
};

export default Tickets;
