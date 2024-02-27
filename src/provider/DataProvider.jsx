import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const ContextProvider = createContext({});

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ContextProvider.Provider value={userData}>
      {children}
    </ContextProvider.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object,
};

export default DataProvider;
