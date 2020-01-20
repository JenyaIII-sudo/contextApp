import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search.." />
    </div>
  );
};

export default SearchBar;
