import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { loading, login } = useLogin();

  const handelSabmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 text-gray-300 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0   ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-gray-500"> ChatApp</span>
        </h1>
        <form onSubmit={handelSabmit}>
          <div>
            <label className="label  p-2">
              <span className="text-base text-gray-300 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter ysername"
              className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label  p-2">
              <span className="text-base text-gray-300 label-text">
                password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to={"/singup"}
            className="text-sm hover:underline  hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account
          </Link>
          <button className="btn btn-block h-10 bg-gray-700 text-gray-300 hover:bg-gray-800 disabled:bg-gray-600 disabled:text-gray-200  btn-sm mt-2" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
