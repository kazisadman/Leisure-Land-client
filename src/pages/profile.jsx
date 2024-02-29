import { useContext } from "react";
import { ContextProvider } from "../provider/DataProvider";
import axios from "axios";

const Profile = () => {
  const { userName, email, setUserData } = useContext(ContextProvider);

  const handleLogout = () => {
    axios
      .get("/logout")
      .then((res) => {
        if (res.status === 200) {
          setUserData(null);
          window.location = "/login";
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1>
          Logged in as {userName}({email})
        </h1>
      </div>
      <div className="w-1/4 mx-auto">
        <button
          onClick={handleLogout}
          className="bg-[#b67352] text-white py-1 rounded-full w-full"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
