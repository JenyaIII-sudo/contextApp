import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.css";
import { UserProvider } from "./Contexts/UserContext";
import Tickets from "./Pages";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await Axios.get(process.env.REACT_APP_TICKETS_API);
        const tickets = response.data;
        setData(tickets);
      } catch (err) {
        console.log("Error:" + err);
      }
    };
    request();
  }, []);
  console.log("DATATAT", data);

  return (
    <UserProvider value={data}>
      <Router>
        <div className={styles.containerFluid}>
          <div className={styles.app}>
            <Tickets />
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
