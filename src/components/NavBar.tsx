"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";
const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <nav
        dir="rtl"
        className="relative z-50 font-peyda px-4 pt-4 flex items-center justify-between max-w-[1200px] md:px-10 mx-auto w-full"
      >
        <div className="flex items-center ">
          <Image
            src={"/logo.png"}
            alt="BluList Logo"
            width={50}
            height={50}
          ></Image>
          <span className="text-xl">بلو لیست</span>
        </div>
        <div className="hidden md:flex bg-white/10 px-10 py-3 rounded-full border border-white/10 ">
          <ul className="flex gap-6 lg:gap-16">
            <li>
              <Link href={"#"}>پلی لیست ها</Link>
            </li>
            <li>
              <Link href={"#"}>ساخت پلی لیست</Link>
            </li>
            <li>
              <Link href={"#"}>درباره ما</Link>
            </li>
            <li>
              <Link href={"#"}>قانون داریم؟</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          {!showMobileNav ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <HiMenu
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => {
                  setShowMobileNav((prev) => !prev);
                }}
              />
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <HiX
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => {
                  setShowMobileNav((prev) => !prev);
                }}
              />
            </motion.div>
          )}
          <button className="hidden bg-gradient-to-br from-blue-500 to-blue-700 px-6 py-2 rounded-3xl md:flex">
            ورود
          </button>
        </div>
      </nav>
      {showMobileNav && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 h-screen w-full bg-gradient-to-tr from-slate-950 to-blue-950 flex justify-center pt-28"
        >
          <div className="text-center font-peyda text-2xl">
            <ul className="flex flex-col gap-10 lg:gap-16">
              <li>
                <Link href={"#"}>پلی لیست ها</Link>
              </li>
              <li>
                <Link href={"#"}>ساخت پلی لیست</Link>
              </li>
              <li>
                <Link href={"#"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"#"}>قانون داریم؟</Link>
              </li>
            </ul>
            <button className="mt-10 bg-gradient-to-br from-blue-500 to-blue-700 px-16 py-2 rounded-3xl">
              ورود
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
