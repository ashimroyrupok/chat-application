"use client"
import { MdEmojiEmotions } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const TypeMessage = () => {
  const [message, setMessage] = useState("");
  const [Socket, setSocket] = useState(null);

  console.log(message)

  const handleSubmit = () => {
    // const socket = io("http://localhost:5000", {
    //   withCredentials: true,
    // });
    // setSocket(socket);
  };

  useEffect(() => {
    
    if(message){
      const socket = io("http://localhost:5000", {
        // withCredentials:true
        credentials:"include",
        "Access-Control-Allow-Credentials":true
      })
      setSocket(socket)
      socket.on("chat", { message });
    }

    // Socket.on("chat", { message });
  }, [message, Socket]);

  return (
    <div className=" w-full text-white  px-2 bg-[#353535] flex py-4 z-50 gap-1 mt-5  items-center fixed bottom-0 ">
      <div className=" w-[7vw] flex  items-center gap-1 ">
        <button className=" p-3 px-3 rounded-md  hover:bg-slate-700 ">
          <MdEmojiEmotions className=" text-xl  " />
        </button>
        <button className=" p-3 px-3 rounded-md  hover:bg-slate-700 ">
          <FaLink className=" text-xl " />
        </button>
      </div>

      <form className=" w-[68vw] ">
        <input
          onChange={(e) => setMessage(e.target.value)}
          className=" w-full bg-transparent py-2 outline-none text-white  "
          placeholder="type here your message.."
          type="text"
        />
      </form>
      <div className=" w-[5vw] ">
        {message ? (
          <button
            onClick={handleSubmit}
            className=" p-3 px-3 rounded-md  hover:bg-slate-700 "
          >
            <LuSendHorizonal className="text-xl" />
          </button>
        ) : (
          <button className=" p-3 px-3 rounded-md  hover:bg-slate-700 ">
            <MdOutlineKeyboardVoice className="text-xl " />
          </button>
        )}
      </div>
    </div>
  );
};

export default TypeMessage;
