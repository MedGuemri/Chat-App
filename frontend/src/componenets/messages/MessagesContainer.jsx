import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessagesContainer = () => {
  const noChatSelected = false

  return (
    <div className="md:min-w-[450px] flex flex-col">
    {
      !noChatSelected? <NoChatSelected /> :
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text text-gray-300">To: </span>
          <span className="text-gray-300 font-bold">John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    }
    </div>
  );
};

export default MessagesContainer;
