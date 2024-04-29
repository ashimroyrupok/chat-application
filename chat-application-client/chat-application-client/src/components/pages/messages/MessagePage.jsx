"use client";
import { Avatar } from "@mui/material";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import TypeMessage from "./TypeMessage";
// import bgImage from "@/components/assests/whatsappBanner.jpg"
const MessagePage = () => {
  return (
    <div className=" w-full text-black bg-opacity-55  overflow-y-auto pb-7  h-[98vh]  bg-[url('https://i.redd.it/3jfjc53fsyb61.jpg')]  ">
      <TypeMessage />
      <div className=" flex gap-2 items-center py-4 -mt-4 shadow-lg fixed bg-[#353535] z-50 bg-blend-overlay w-full">
        <Avatar />
        <h1 className="text-white">Name </h1>
      </div>
      <div className={` w-full  pt-16 mb-12 `}>
        <div className="flex justify-end   w-full ">
          <MessageBox
            className=" w-1/2 "
            title="ashim"
            position={"right"}
            replyButton={true}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-start   w-full ">
          <MessageBox
            className=" w-1/2 "
            position={"left"}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-end   w-full ">
          <MessageBox
            className=" w-1/2 "
            title="ashim"
            position={"right"}
            replyButton={true}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-start   w-full ">
          <MessageBox
            className=" w-1/2 "
            position={"left"}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-end   w-full ">
          <MessageBox
            className=" w-1/2 "
            title="ashim"
            position={"right"}
            replyButton={true}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-start   w-full ">
          <MessageBox
            className=" w-1/2 "
            position={"left"}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-end   w-full ">
          <MessageBox
            className=" w-1/2 "
            title="ashim"
            position={"right"}
            replyButton={true}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-start   w-full ">
          <MessageBox
            className=" w-1/2 "
            position={"left"}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adora!"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-end   w-full ">
          <MessageBox
            className=" w-1/2 "
            title="ashim"
            position={"right"}
            replyButton={true}
            type={"text"}
            text={
              "Lorem ipsum, dolor"
            }
            data={"date"}
          />
        </div>
        <div className="flex justify-start   w-full ">
          <MessageBox
            className=" w-1/2 "
            position={"left"}
            type={"text"}
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora  sit amet consectetur adipisicing elit. Maxime iusto eaque itaque, provident in quis sequi nesciunt voluptatum dicta! Tempora!"
            }
            data={"date"}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
