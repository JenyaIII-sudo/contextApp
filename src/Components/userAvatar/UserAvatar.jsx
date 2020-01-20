import React from "react";
import styles from "./UserAvatar.module.css";

const UserAvatar = ({ ava }) => {
  return (
    <div className={styles.userAvatar}>
      <img src={ava} alt="" />
    </div>
  );
};

export default UserAvatar;
