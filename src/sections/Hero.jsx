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
                Welcome to the Mushroom Kingdom of crypto, where fun meets finance, and memes rule supreme! Say hello to Mariosol, your cheerful companion on the Solana blockchain. <br />
                Mariosol isn't just any crypto meme; it's your trusty sidekick in the wild world of digital currencies. Inspired by the bright nature, energy, and cheerful memes of everyone's favorite.
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
                  href="https://t.me/mariosoll"
                  target="_blank"
                  className="font-groot-two text-xl uppercase  bg-[#ffffff] border-2 border-[#000000] text-[#000000] py-1 px-4 rounded-2xl"
                >
                  Telegram
                </a>
                <a
                  href="#"
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
