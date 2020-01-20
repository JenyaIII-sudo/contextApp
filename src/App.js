import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.css";
import { UserProvider } from "./Contexts/UserContext";
import Tickets from "./Pages";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className={styles.containerFluid}>
          <div className={styles.app}>
            <Tickets />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
