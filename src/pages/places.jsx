import { Link } from "react-router-dom";

const Places = () => {
    return (
      <div>
        <div className="flex justify-center items-center my-5">
          <Link to='new' className="bg-[#b67352] text-white p-2 rounded-full flex">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
        <div>my places</div>
      </div>
    );
};

export default Places;