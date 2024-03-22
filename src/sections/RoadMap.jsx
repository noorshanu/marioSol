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
            <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">Meme Creation</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white"> Dive into our meme generator and craft hilarious memes inspired by Mariosol's adventures. The only limit is your imagination!</p>
  
          
          
          </div>

          <div className="pattern--hashes border-4 py-5 px-5  rounded-xl w-[100%] h-full ">
          <div>
              <img src="images/stake.jpeg" alt="" className=' w-[300px] mx-auto rounded-xl mb-2' />
            </div>
          <div>
          <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">250 NFTS</h1>
           
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white "> Get your hands on exclusive NFTs featuring iconic moments from Mariosol's journey. Limited edition collectibles for true fans!</p>
      
       

          </div>
          <div className=" py-5 px-5  rounded-xl w-[100%] pattern--hashes border-4">
          <div>
              <img src="images/meme.jpeg" alt="" className=' w-[300px] mx-auto rounded-xl mb-2' />
            </div>
          <div>
          <h1 className="font-groot-two font-bold  text-white text-center  text-xl mb-1">Staking</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7 text-white">Stake your Mariosol tokens and earn rewards while you HODL. Support the Mariosol ecosystem and grow your crypto stash.</p>
 
          

          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap