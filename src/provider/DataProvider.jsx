import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const ContextProvider = createContext({});

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const { email, userName } = userData;

  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const data = {
    email,
    userName,
    loading,
    setUserData
  };

  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.object,
};

export default DataProvider;
