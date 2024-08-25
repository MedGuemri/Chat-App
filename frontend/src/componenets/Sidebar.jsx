import Converstations from "./sidebar/Converstations"
import LogOutButton from "./sidebar/LogOutButton"
import SearhInput from "./sidebar/SearhInput"


const Sidebar = () => {
  return (
    <div  className='border-r border-slate-500 p-4 flex flex-col'>
        <SearhInput />
        <div className="divider px-3" />
        <Converstations />
        <LogOutButton />
      
    </div>
  )
}

export default Sidebar
