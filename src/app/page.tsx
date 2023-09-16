import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
export default function Home() {
  return (
    <section className="h-screen w-full main-gradient flex flex-col">
      <NavBar />
      <div
        dir="rtl"
        className="flex-grow flex flex-col  gap-5 items-center justify-center md:flex-row max-w-[1400px] md:gap-36 lg:gap-56 mx-auto"
      >
        <div className="flex flex-col gap-4 justify-center items-center px-2 text-center md:text-right md:gap-10 md:items-start max-w-[700px]">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 leading-[1.4] md:text-right md:text-6xl md:leading-[1.4] max-w-[550px]">
            Bluلـیسـت
          </h1>
          <p className="text-white/50 max-w-[500px] md:text-lg">
            بـا بلـولیست پلی لیسـت خودتون رو گوش بدید،به اشتراک بگذارید، بین پلی
            لیسـت های مختلف کاووش کنید!
          </p>
          <div className={"flex flex-row gap-2"}>
            <Link
              href={"https://t.me/bluListBot"}
              target={"_blank"}
              className="bg-blue-600/30 border border-blue-500/50 rounded-xl flex gap-2 px-6 py-3 transition-all duration-300 hover:bg-blue-600"
            >
              <BiLogoTelegram />
              شروع کار با ربات
            </Link>
            <Link
              href={"/playlists"}
              className="bg-blue-600/30 border border-blue-500/50 rounded-xl flex gap-2 px-6 py-3 transition-all duration-300 hover:bg-blue-600"
            >
              <MdExplore />
              کاووش در پلی لیست ها
            </Link>
          </div>
        </div>
        {/*<div>*/}
        {/*  <Image*/}
        {/*    src={"/screenshot.png"}*/}
        {/*    alt="Blulist Telegram Bot - Chat Screenshot"*/}
        {/*    width={200}*/}
        {/*    height={200}*/}
        {/*  ></Image>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
