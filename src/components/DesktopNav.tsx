"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome, AiOutlineCloudServer } from "react-icons/ai";
import { BiSearch, BiSolidPlaylist } from "react-icons/bi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BsGithub, BsTelegram } from "react-icons/bs";
const DesktopNav = () => {
  const pathName = usePathname();
  return (
    <div className="hidden w-[400px] h-screen bg-[#0F172A] md:flex flex-col">
      <div className="flex items-center px-16">
        <Image
          src="/logo.png"
          alt="Blulist logo"
          className={"mt-5"}
          width={40}
          height={40}
        ></Image>
        <h1>بلولیست</h1>
      </div>
      <ul dir="rtl" className="w-full flex flex-col pt-6 px-8 gap-8">
        <li>
          <Link
            href={"/playlists"}
            className={clsx(
              "flex items-center text-white/50 w-full  p-3 gap-2",
              pathName.startsWith("/playlists") &&
                "text-white/100 bg-[#2196f380] rounded-2xl",
            )}
          >
            <BiSolidPlaylist />
            <span className="text-sm font-light">پلی لیست ها</span>
          </Link>
        </li>
        {/*<li>*/}
        {/*    <Link*/}
        {/*        href={"/search"}*/}
        {/*        className={clsx(*/}
        {/*            "flex items-center text-white/50 w-full gap-1",*/}
        {/*            pathName.startsWith("/search") && "text-white/100"*/}
        {/*        )}*/}
        {/*    >*/}
        {/*        <BiSearch />*/}
        {/*        <span className="text-sm font-light">جستجو</span>*/}
        {/*    </Link>*/}
        {/*</li>*/}
        <li>
          <a
            href={"https://sarvdata.com/"}
            target={"_blank"}
            className={clsx("flex items-center text-white/50 w-full gap-2")}
          >
            <AiOutlineCloudServer />
            <span className="text-sm font-light">اسپانسر پروژه</span>
          </a>
        </li>
        <li>
          <a
            href={"https://t.me/bluListBot"}
            target={"_blank"}
            className={clsx("flex items-center text-white/50 w-full gap-2")}
          >
            <BsTelegram />
            <span className="text-sm font-light">ربـات تلگرام</span>
          </a>
        </li>
        <li>
          <a
            href={"https://github.com/blulist"}
            target={"_blank"}
            className={clsx("flex items-center text-white/50 w-full gap-2")}
          >
            <BsGithub />
            <span className="text-sm font-light">گیت هاب</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
