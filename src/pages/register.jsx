import { Link } from "react-router-dom";
import image from "../assets/undraw_travel_booking_re_6umu.svg";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const registerData = {
    userName: userName,
    email: email,
    password: password,
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("/register", registerData)
      .then((res) => {
        if (res.status === 200) {
          window.location = "/";
        }
        console.log(res, res.status);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse py-5">
      <div className="w-full lg:w-1/2 p-6 flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          commodi molestias deserunt, veniam est aperiam suscipit at tenetur
          doloremque error.
        </p>
        <form
          action="#"
          onSubmit={handleRegister}
          className="flex flex-col gap-4 w-full lg:w-3/4 mx-auto"
        >
          <label htmlFor="" className="font-bold">
            Enter your username
          </label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 py-1 border-2 border-gray-300"
            placeholder="your name"
          />
          <label htmlFor="" className="font-bold">
            Enter your Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 border-2 border-gray-300"
            placeholder="name@example.com"
          />
          <label htmlFor="" className="font-bold">
            Enter your Password
          </label>

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 border-2 border-gray-300"
            placeholder="atleast 8 characters"
          />
          <button className="bg-[#b67352] text-white font-semibold p-2 rounded-lg">
            Register
          </button>
        </form>
        <Link
          to="/login"
          className="flex border-2 w-1/4 mx-auto justify-center p-2 rounded-full border-[#b67352]"
        >
          Log in now
        </Link>
      </div>
      <div className="flex-1">
        <img src={image} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Register;
