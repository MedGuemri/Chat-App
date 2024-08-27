import useConversation from "../../store/useConverstaion";

const Conversation = ({converstaion,emoji,lastIndex}) => {
  const {selectedConversation,setSelectedConversation}=useConversation()

  const isSelected= selectedConversation?._id === converstaion._id
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-emerald-600 rounded p-2 py-1 cursor-pointer ${isSelected? "bg-emerald-600":""}`}
        onClick={()=>setSelectedConversation(converstaion)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={converstaion.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{converstaion.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
       
      </div>
      {!lastIndex && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;
