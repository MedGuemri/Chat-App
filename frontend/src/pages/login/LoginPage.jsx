
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 text-gray-300 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0   ">
        <h1  className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-gray-500"> ChatApp</span>
        </h1>
        <form >
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
            <a href="#" className="text-sm hover:underline  hover:text-blue-500 mt-2 inline-block">
                {"Don't"} have an account
            </a>
            <button className="btn btn-block btn-sm mt-2 h-10 bg-gray-700 border-none text-gray-300 hover:bg-gray-800 hover:scale-105 transition duration-200 ">Login</button>
            
        </form>

      </div>
    </div>
  )
}

export default LoginPage
