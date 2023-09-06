"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSearch, BiSolidPlaylist } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const DesktopNav = () => {
    const pathName = usePathname();
    return (
        <div className="hidden w-[400px] h-screen bg-slate-900 md:flex flex-col">
            <div className="flex items-center px-16">
                <Image
                    src="/logo.png"
                    alt="Blulist logo"
                    width={40}
                    height={40}
                ></Image>
                <h1>بلولیست</h1>
            </div>
            <ul dir="rtl" className="w-full flex flex-col pt-6 px-8 gap-8">
                <li className="">
                    <Link
                        href={"/home"}
                        className={clsx(
                            "flex items-center text-white/50 w-full",
                            pathName.startsWith("/home") && "text-white/100"
                        )}
                    >
                        <AiFillHome />
                        <span className="text-sm font-light">خانه</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/playlists"}
                        className={clsx(
                            "flex items-center text-white/50 w-full",
                            pathName.startsWith("/playlists") &&
                                "text-white/100"
                        )}
                    >
                        <BiSolidPlaylist />
                        <span className="text-sm font-light">پلی لیست</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/search"}
                        className={clsx(
                            "flex items-center text-white/50 w-full",
                            pathName.startsWith("/search") && "text-white/100"
                        )}
                    >
                        <BiSearch />
                        <span className="text-sm font-light">جستجو</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/library"}
                        className={clsx(
                            "flex items-center text-white/50 w-full",
                            pathName.startsWith("/library") && "text-white/100"
                        )}
                    >
                        <MdLibraryMusic />
                        <span className="text-sm font-light">کتابخانه</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopNav;
