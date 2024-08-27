<<<<<<< HEAD
import { Link } from "react-router-dom";
import Checkbox from "./Checkbox";
import { useState } from "react";
import useSingup from "../../hooks/useSingup";

const Singup = () => {
  const [inputes, setInputes] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading,  singup } = useSingup();

  const handelSabmit = async (e) => {
    e.preventDefault();
    await singup(inputes);
  };

  const handleCheckboxChange = (gender) => {
    setInputes({ ...inputes, gender });
  };
=======
import { Link } from "react-router-dom"
import Checkbox from "./Checkbox"
import { useState } from "react"
import useSingup from "../../hooks/useSingup"


const Singup = () => {
    const [inputes,setInputes]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })

    const {loading,singup}=useSingup()

    const handelSabmit=async(e)=>{
        e.preventDefault()
       await singup(inputes)

    }

    const handleCheckboxChange = (gender) => {
		setInputes({ ...inputes, gender });
	};



>>>>>>> accb234e042febf56f76af8ff43f458e9287f58f

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 text-gray-300 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0   ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Singup
          <span className="text-emerald-700"> ChatApp</span>
        </h1>
<<<<<<< HEAD
        <form onSubmit={handelSabmit}>
          <div>
            <label className="label  p-2">
              <span className="text-base text-gray-300 label-text">
                Full name
              </span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
              value={inputes.fullName}
              onChange={(e) =>
                setInputes({ ...inputes, fullName: e.target.value })
              }
            />
          </div>
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
              value={inputes.username}
              onChange={(e) =>
                setInputes({ ...inputes, username: e.target.value })
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
              value={inputes.password}
              onChange={(e) =>
                setInputes({ ...inputes, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label  p-2">
              <span className="text-base text-gray-300 label-text">
                {" "}
                Confirm password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
              value={inputes.confirmPassword}
              onChange={(e) =>
                setInputes({ ...inputes, confirmPassword: e.target.value })
              }
            />
          </div>

          <Checkbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputes.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline  hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account
          </Link>
          <button
            className="btn btn-block btn-sm h-10 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:bg-gray-600 disabled:text-gray-200 mt-2 border-2 border-gray-300"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
=======
        <form  onSubmit={handelSabmit}>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">Full name</span>
                </label>
                <input type="text"
                        placeholder="Full name"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                        value={inputes.fullName}
                        onChange={(e)=>setInputes({...inputes,fullName:e.target.value})}
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">Username</span>
                </label>
                <input type="text"
                        placeholder="Enter ysername"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                        value={inputes.username}
                        onChange={(e)=>setInputes({...inputes,username:e.target.value})}
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">password</span>
                </label>
                <input type="password"
                        placeholder="Enter password"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                        value={inputes.password}
                        onChange={(e)=>setInputes({...inputes,password:e.target.value})}
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text"> Confirm password</span>
                </label>
                <input type="password"
                        placeholder="confirm password"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                        value={inputes.confirmPassword}
                        onChange={(e)=>setInputes({...inputes,confirmPassword:e.target.value})}
                />
            </div>

            <Checkbox onCheckboxChange={handleCheckboxChange} selectedGender={inputes.gender} />
            <Link to={"/login"} className="text-sm hover:underline  hover:text-blue-500 mt-2 inline-block">
               Already  have an account
            </Link>
            <button className="btn btn-block h-10 btn-sm mt-2 bg-gray-700 border-none text-gray-300 hover:bg-gray-800 hover:scale-105 transition duration-200 ">
                Singup
            </button>
            
>>>>>>> accb234e042febf56f76af8ff43f458e9287f58f
        </form>
      </div>
    </div>
  );
};

export default Singup;
