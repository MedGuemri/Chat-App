import { useEffect } from "react";
import useConversation from "../../store/useConverstaion";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessagesContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation()

  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className="md:min-w-[450px] flex flex-col">
    {
      !selectedConversation? <NoChatSelected /> :
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text text-gray-300">To: </span>
          <span className="text-gray-300 font-bold">{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    }
    </div>
  );
};

export default MessagesContainer;
