import Checkbox from "./Checkbox"


const Singup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 text-gray-300 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0   ">
        <h1  className="text-3xl font-semibold text-center text-gray-300">
            Singup
            <span className="text-emerald-700"> ChatApp</span>
        </h1>
        <form >
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">Full name</span>
                </label>
                <input type="text"
                        placeholder="Full name"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                      
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">Username</span>
                </label>
                <input type="text"
                        placeholder="Enter ysername"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                      
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text">password</span>
                </label>
                <input type="password"
                        placeholder="Enter password"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                      
                />
            </div>
            <div>
                <label className="label  p-2">
                    <span className="text-base text-gray-300 label-text"> Confirm password</span>
                </label>
                <input type="password"
                        placeholder="confirm password"
                        className="w-full input input-bordered focus:ring-gray-300 focus:ring-2  bg-gray-700 h-10"
                      
                />
            </div>

            <Checkbox />
            <a href="#" className="text-sm hover:underline  hover:text-blue-500 mt-2 inline-block">
               Already  have an account
            </a>
            <button className="btn btn-block h-10 btn-sm mt-2 bg-gray-700 border-none text-gray-300 hover:bg-gray-800 hover:scale-105 transition duration-200 ">
                Singup
            </button>
            
        </form>

      </div>
    </div>
  )
}

export default Singup
