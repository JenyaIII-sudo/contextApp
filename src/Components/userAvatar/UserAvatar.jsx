import React from "react";
import styles from "./UserAvatar.module.css";

const UserAvatar = () => {
  return (
    <div className={styles.userAvatar}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/super-hero/154/spider-man-spiderman-comics-hero-avatar-512.png"
        alt=""
      />
    </div>
  );
};

export default UserAvatar;
