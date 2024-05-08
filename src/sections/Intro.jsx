import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 pb-[3rem] mt-6 ">
        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px]    ">
            {/* <RoadmapCards /> */}

            <img
              src="images/about.jpeg"
              alt=""
              className=" rounded-3xl h-auto  sm:h-[400px] mx-auto mb-4  border-4 border-[#e70112] "
            />
          </div>
          <div className=" max-w-xl">
            <p className="font-bold font-groot-two  text-xl sm:text-6xl  text-[#0058bc] py-2">
              Welcome to the wild world of MarioWif!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3    text-[#000] font-medium">
              MarioWif brings joy and laughter to the decentralized universe.
              Just like MarioWif himself, we're here to rescue you from the
              mundane and take you on an adventure through the meme-filled
              landscape of crypto. Join us as we ride warp pipes to the moon and
              beyond!
            </h1>

        
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
