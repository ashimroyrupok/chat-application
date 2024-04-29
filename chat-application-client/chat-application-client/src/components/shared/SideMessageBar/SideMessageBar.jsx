import { Avatar, Button } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import MessageCard from "./MessageCard";

const SideMessageBar = () => {
  return (
    <div className=" px-7 pt-7  shadow-lg rounded-lg overflow-y-auto overflow-x-hidden h-[98vh] ">
      <div className=" flex  fixed z-50 bg-[#353535] py-2 -mt-8 justify-between items-center  ">
        <h2 className=" text-xl  ">Chats</h2>
        <Button>
          {" "}
          <FaRegEdit className="text-2xl " />{" "}
        </Button>
      </div>
      {/* search bar */}
      <div className=" text-black m-3 w-full px-4 mt-8 ">
        {/* <input
          type="text"
          className=" outline-none bg-[#4f4747] w-full py-1 text-left  "
        /> */}
      </div>
      {/* messages  */}
      <div className="  ">
        <MessageCard />
      </div>
    </div>
  );
};

export default SideMessageBar;
