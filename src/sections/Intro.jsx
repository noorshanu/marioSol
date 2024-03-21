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
              Welcome to the wild world of MinionSol!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3    text-[#000] font-medium">
              MinionSol, where the memes are as plentiful as bananas in a
              minion's lair! We're not just any old crypto meme coin – we're
              your loyal companions on the journey to meme greatness.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3  text-[#000] font-medium">
              With hearts as big as Gru's ambitions and a community as
              tight-knit as a group hug from a bunch of minions, you'll feel
              right at home with us.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
