"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSearch, BiSolidPlaylist } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const MobileNav = () => {
    const pathName = usePathname();
    return (
        <div className="fixed bottom-0 w-full bg-slate-900 md:hidden">
            <ul
                className="flex items-center justify-around px-5 py-3"
                dir="rtl"
            >
                <li className="">
                    <Link
                        href={"/home"}
                        className={twMerge(
                            "flex flex-col items-center justify-center text-white/50 transition-all duration-300 ",
                            pathName.startsWith("/home") && "text-white/100"
                        )}
                    >
                        <AiFillHome />
                        <span className="text-sm font-light">خانه</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/playlists#"}
                        className={twMerge(
                            "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
                            pathName.startsWith("/playlists") &&
                                "text-white/100"
                        )}
                    >
                        <BiSolidPlaylist />
                        <span className="text-sm font-light">پلی لیست ها</span>
                    </Link>
                </li>
                <li>
                    <Link
                        href={"/search"}
                        className={twMerge(
                            "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
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
                        className={twMerge(
                            "flex flex-col items-center justify-center text-white/50 transition-all duration-300",
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

export default MobileNav;
