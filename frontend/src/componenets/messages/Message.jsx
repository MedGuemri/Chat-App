import { useAuthContext } from "../../context/athContext"
import useConversation from "../../store/useConverstaion"
import { extractTime } from "../../utils/extractTime"


const Message = ({message}) => {
	const {authUser}=useAuthContext()
	const{selectedConversation}=useConversation()
	const fromMe = message.senderId === authUser._id 
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbelBgColor= fromMe ? "bg-emerald-600":""
	const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic
	const formatedTime= extractTime(message.createdAt)


	return(

    <div  className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbelBgColor} text-white  pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs text-gray-300 flex gap-1 items-center'>{formatedTime}</div>
		</div>
)}

export default Message
