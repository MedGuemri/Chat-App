import Sidebar from "../../componenets/Sidebar"
import MessagesContainer from "../../componenets/messages/MessagesContainer"


const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    
			<Sidebar />
			<MessagesContainer />
		</div>
  )
}

export default Home
