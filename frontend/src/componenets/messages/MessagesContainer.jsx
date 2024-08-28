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
    <div className="md:min-w-[450px] flex flex-col h-[100vh] max-h-[100vh]">
  {
    !selectedConversation ? <NoChatSelected /> :
    <>
      {/* Header */}
      <div className="bg-slate-500 px-4 py-2">
        <span className="label-text text-gray-300">To: </span>
        <span className="text-gray-300 font-bold">{selectedConversation.fullName}</span>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto">
        <Messages />
      </div>

      {/* Input */}
      <div className="px-4 py-2 bg-slate-600">
        <MessageInput />
      </div>
    </>
  }
</div>
  );
};

export default MessagesContainer;
