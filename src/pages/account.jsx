import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ContextProvider } from "../provider/DataProvider";

const Account = () => {
  const { loading } = useContext(ContextProvider);

  const location = useLocation();
  let subPage = location.pathname.split("/")[2];

  if (subPage === undefined) {
    subPage = "profile";
  }

  const linkSubPage = (type = null) => {
    if (type === subPage) {
      return `bg-[#b67352] text-white p-2 rounded-full`;
    }
  };

  return (
    <>
      {loading ? (
        <div className="absolute top-1/2">loading....</div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center gap-3 h-full">
            <div className="flex items-center gap-8">
              <Link
                to=""
                className={`flex gap-1 items-center ${linkSubPage("profile")}`}
              >
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                My profile
              </Link>
              <Link
                to="bookings"
                className={`flex gap-1 items-center ${linkSubPage("bookings")}`}
              >
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                My bookings
              </Link>
              <Link
                to="accommodation"
                className={`flex gap-1 items-center ${linkSubPage(
                  "accommodation"
                )}`}
              >
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
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                My accommodations
              </Link>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      )}
    </>
  );
};

export default Account;
