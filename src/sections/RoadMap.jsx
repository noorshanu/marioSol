import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 mt-4 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
    
        <h2 className="font-groot-two text-5xl my-2 text-[#0058bc] text-center font-bold relative z-30 my-4">
         MarioSol Features
        </h2>
     

  

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="pattern--hashes border-4  py-5 px-5  rounded-xl w-[100%] ">
            <div>
              <img src="images/nft.jpeg" alt="" className=' w-[300px] mx-auto rounded-xl mb-2' />
            </div>
            <div>
            <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">Phase 1</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white">•  Build community foundation.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• Do initial market research.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">•  Launch SylvesterSol.</p>
          
          
          </div>

          <div className="pattern--hashes border-4 py-5 px-5  rounded-xl w-[100%] h-full ">
          <div>
              <img src="images/stake.jpeg" alt="" className=' w-[300px] mx-auto rounded-xl mb-2' />
            </div>
          <div>
          <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">Phase 2</h1>
           
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white ">• Grow community</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• Do partnerships.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• CMC & CG listing.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• Introduce Staking. .</p>
       

          </div>
          <div className=" py-5 px-5  rounded-xl w-[100%] pattern--hashes border-4">
          <div>
              <img src="images/meme.jpeg" alt="" className=' w-[300px] mx-auto rounded-xl mb-2' />
            </div>
          <div>
          <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">Phase 3</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white">•  Open Pet Store.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• List on Tier 1 Exchange.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7 text-white">• Launch SylvesterSol Game.</p>
          

          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap