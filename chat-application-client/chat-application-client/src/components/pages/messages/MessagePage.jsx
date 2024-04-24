"use client";
import { Avatar } from "@mui/material";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
// import bgImage from "@/components/assests/whatsappBanner.jpg"
const MessagePage = () => {
  return (
    <div className=" w-full text-black overflow-y-auto  h-screen  ">
      <div className=" flex gap-2 items-center py-4 -mt-4 shadow-lg fixed bg-[#353535] z-50 bg-blend-overlay w-full">
        <Avatar />
        <h1 className="text-white" >Name </h1>
      </div>
      <div
        className={` w-full  mt-8 `}
        // style={{
        //   backgroundImage: 'url("../../assests/whatsappBanner.jpg")',
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: "100%",
        //   height: "100vh",
        // }}
      >
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
      </div>
    </div>
  );
};

export default MessagePage;
