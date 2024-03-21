import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  relative py-10 ">
      <div className="container-wrapper py-8">
        <div className="relative z-50">
          <div className=" flex justify-center flex-col sm:flex-row items-center ">
            <div className=" w-full ">
              <img
                src="images/hero.jpeg"
                alt=""
                className=" h-[400px] mx-auto border-4 border-[#e70112] rounded-xl "
              />
            </div>
            <div>
              <div className=" max-w-4xl mx-auto bg-[#ffd100] border-4 border-[#e70112] py-4 px-2 rounded-2xl mt-6 ">
                <h2 className=" text-center  my-2 text-2xl text-black">
                  MinionSol, where the memes are as plentiful as bananas in a
                  minion's lair! We're not just any old crypto meme coin – we're
                  your loyal companions on the journey to meme greatness. With
                  hearts as big as Gru's ambitions and a community as tight-knit
                  as a group hug from a bunch of minions, you'll feel right at
                  home with us.
                </h2>
              </div>

              <div className=" flex justify-center gap-4 items-center py-4">
                <a
                  href="/"
                  className="font-groot-two text-xl uppercase  bg-[#fffffe] border-2 border-[#000000] py-1 px-4 rounded-2xl text-black"
                >
                  DexTools
                </a>
                <a
                  href="https://t.me/smurfsol"
                  target="_blank"
                  className="font-groot-two text-xl uppercase  bg-[#ffffff] border-2 border-[#000000] text-[#000000] py-1 px-4 rounded-2xl"
                >
                  Telegram
                </a>
                <a
                  href="https://t.me/smurfsol"
                  target="_blank"
                  className="font-groot-two text-xl uppercase  bg-[#ffffff] border-2 border-[#000000] py-1 px-4 rounded-2xl text-[#000000]"
                >
                  Twitter
                </a>
              </div>

            
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
}

export default Hero;
