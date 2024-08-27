import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../store/useConverstaion";

const MessageInput = () => {
  const [inputs,setInputs]=useState("")
  const { sendMessage, loading }=useSendMessage()
  const { messages,  } = useConversation()
  



  const handelSubmit=async(e)=>{
    e.preventDefault()
    if (!inputs) return;
    await sendMessage(inputs)
    setInputs("")

  }

  return (
    <form onSubmit={handelSubmit} 
          className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 
          focus:ring-2  focus:border-emerald-600 focus:ring-emerald-600 bg-gray-700 border-gray-700 text-white"
          placeholder="Send a message"
          value={inputs}
          onChange={(e)=>setInputs(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
          {loading ? <span className='loading loading-spinner bg-gray-300 mx-auto'></span>
           : 
            <BsSend className="text-gray-300"/>
           }
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
