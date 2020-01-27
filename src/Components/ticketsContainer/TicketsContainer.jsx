import React, { useState } from "react";
import styles from "./TicketsContainer.module.css";
import Owner from "../owner";
import TicketsList from "../ticketsList";

const TicketsContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});

  const handleClick = item => {
    setSelectedItem(item);
  };
  console.log("SELECTED", selectedItem);
  return (
    <div className={styles.list}>
      <TicketsList handleClick={handleClick} />
      <Owner item={selectedItem} />
    </div>
  );
};

export default TicketsContainer;
