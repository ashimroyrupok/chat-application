import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div className=" w-full  text-white h-screen flex justify-center items-center bg-white ">
      <div className=" bg-blue-900  p-4  rounded-xl">
        <div className=" flex justify-around p-2  my-4 items-center gap-4">
          <div className="p-3">
            <div>
              <h4>balance left</h4>
              <h1 className="text-yellow-500 text-2xl  "> 1.3 tk </h1>
              <p className=" text-[12px]  my-2 ">
                {" "}
                expires at 07:26 pm,Sunday <br /> 28/04/2024{" "}
              </p>
              <hr className="my-4" />
            </div>
            <div>
              <h4>minute left</h4>
              <h1 className="text-yellow-500 text-2xl  "> 0.0 minute </h1>
              <p className=" text-[12px]  my-2 flex  items-center ">
                {" "}
                <span>check other balance</span>{" "}
                <span>
                  {" "}
                  <MdKeyboardArrowRight className=" text-xl " />{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" border-white  px-3 py-4 bg-white rounded-full ">
            <div className="bg-blue-900 p-6 py-8 rounded-full flex flex-col justify-center items-center ">
              <h3>data left</h3>
              <h1 className="text-yellow-500 text-2xl  "> 4.3 MB </h1>
              <a> data details </a>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly w-full  gap-8 ">
          <button className="text-white rounded-3xl border-white border-2  px-10 py-3  bg-pink-600 ">
            {" "}
            reload{" "}
          </button>
          <button className="text-white rounded-3xl border-white border-2 px-7 py-3  bg-pink-600 ">
            {" "}
            buy data
          </button>
        </div>
        <hr className="my-4 " />
        <p className="text-white my-2 text-center  ">
          {" "}
          pay as your do disabled{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
