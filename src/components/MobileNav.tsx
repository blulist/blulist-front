"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome, AiOutlineCloudServer } from "react-icons/ai";
import { BiSearch, BiSolidPlaylist } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BsGithub, BsTelegram } from "react-icons/bs";
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <div className="fixed bottom-0 w-full bg-[#0F172A] md:hidden">
      <ul className="flex items-center justify-around px-5 py-3" dir="rtl">
        <li>
          <Link
            href={"/playlists#"}
            className={twMerge(
              "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
              pathName.startsWith("/playlists") && "text-white/100",
            )}
          >
            <BiSolidPlaylist />
            <span className="text-sm font-light">پلی لیست ها</span>
          </Link>
        </li>
        {/*<li>*/}
        {/*    <Link*/}
        {/*        href={"/search"}*/}
        {/*        className={twMerge(*/}
        {/*            "flex flex-col items-center justify-center text-white/50 transition-all duration-300",*/}
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
            className={twMerge(
              "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
            )}
          >
            <AiOutlineCloudServer />
            <span className="text-sm font-light">اسپانسر پروژه</span>
          </a>
        </li>
        <li>
          <a
            href={"https://t.me/bluListBot"}
            target={"_blank"}
            className={twMerge(
              "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
            )}
          >
            <BsTelegram />
            <span className="text-sm font-light">ربـات تلگرام</span>
          </a>
        </li>
        <li>
          <a
            href={"https://github.com/blulist"}
            target={"_blank"}
            className={twMerge(
              "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
            )}
          >
            <BsGithub />
            <span className="text-sm font-light">گیت هاب</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
