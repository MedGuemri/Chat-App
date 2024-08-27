import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/getEmojy"
import Conversation from "./Conversation"


const Converstations = () => {
	const {loading,conversations}=useGetConversations()

  return (
    <div className='py-2 flex flex-col overflow-auto'>
 			{conversations.map((converstaion,index)=>(
				<Conversation 
				key={converstaion._id}
				converstaion={converstaion}
				emoji={getRandomEmoji()}
				lastIndex={ index === conversations.length - 1}
				
				/>
 			
			))}
			 {loading ? <span className='loading loading-spinner bg-gray-300 mx-auto'></span> : null}
 		</div>
  )
}

export default Converstations
