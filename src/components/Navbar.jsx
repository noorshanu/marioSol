import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[#e60012]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
        <div className=" flex items-center">
        <img src="/images/logo.png" className="max-w-[5rem] w-full " alt="" />
        <p className=" text-2xl font-groot-two mt-2 text-white">MarioSol</p>
        </div>

        <div>
        <div className=" flex justify-center gap-4 items-center py-4">
         
          <a
            href="https://t.me/mariosoll"
            target="_blank"
            className="font-groot-two text-xl uppercase  bg-[#ffffff] border-2 border-[#000000] text-[#0058bc] py-1 px-4 rounded-2xl"
          >
            Telegram
          </a>
      
        </div>
        </div>

       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
