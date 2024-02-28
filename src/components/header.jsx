import { Link } from "react-router-dom";
import Logo from "./logo";
import { useContext } from "react";
import { ContextProvider } from "../provider/DataProvider";

const Header = () => {
  const {userName} = useContext(ContextProvider);
  return (
    <div>
      <header className="p-4 flex justify-between">
        <Logo></Logo>
        <div className="flex items-center border-2 p-2 rounded-full gap-2 shadow-md shadow-gray-200">
          <div>Anywhere |</div>
          <div>Any week |</div>
          <div>Add guest</div>
          <button className=" p-1 rounded-full bg-[#b67352] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center border-2 p-2 rounded-full gap-2 shadow-md shadow-gray-200">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link
            to={userName ? "/account" : "/login"}
            className=" p-2 rounded-full bg-gray-400 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h3>{userName}</h3>
        </div>
      </header>
    </div>
  );
};

export default Header;
