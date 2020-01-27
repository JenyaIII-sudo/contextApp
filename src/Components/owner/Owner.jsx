import React from "react";
import styles from "./Owner.module.css";
import UserAvatar from "../userAvatar";

const Owner = ({ item }) => {
  return (
    <div className={styles.ownerInfo}>
      <h2>Owner</h2>
      <UserAvatar ava={item.avatar} />
      <div className={styles.names}>
        <h3>{item.firstName}</h3>
        <h3>{item.lastName}</h3>
      </div>
      <div className={styles.specialist}>{item.specialities}</div>
    </div>
  );
};

export default Owner;
