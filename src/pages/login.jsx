import { Link } from "react-router-dom";
import image from "../assets/undraw_traveling_yhxq.svg";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post("/login", loginData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row py-5">
      <div className="w-full lg:w-1/2 p-6 flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Log in</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          commodi molestias deserunt, veniam est aperiam suscipit at tenetur
          doloremque error.
        </p>
        <form
          action="#"
          className="flex flex-col gap-4 w-full lg:w-3/4 mx-auto"
          onSubmit={handleLogin}
        >
          <label htmlFor="" className="font-bold">
            Enter your Email
          </label>
          <input
            type="email"
            className="px-2 py-1 border-2 border-gray-300"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="font-bold">
            Enter your Password
          </label>

          <input
            type="password"
            className="px-2 py-1 border-2 border-gray-300"
            placeholder="atleast 8 characters"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#b67352] text-white font-semibold p-2 rounded-lg">
            Login
          </button>
        </form>
        <Link
          to="/register"
          className="flex border-2 w-1/4 mx-auto justify-center p-2 rounded-full border-[#b67352]"
        >
          Sign Up now
        </Link>
      </div>
      <div className="flex-1">
        <img src={image} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Login;
