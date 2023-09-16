"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgPlayList } from "react-icons/cg";
import { FaEye, FaMusic } from "react-icons/fa"; // یا آیکون‌های دیگری که مورد نیاز دارید

const PlaylistCard: React.FC<Playlist> = ({
  name,
  slug,
  isHaveBanner,
  viewCount,
  tracksCount,
}) => {
  return (
    <div className="w-full  p-2" dir="rtl">
      <Link href={`/playlists/${slug}`}>
        <div className="relative">
          <Image
            src={
              isHaveBanner
                ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/playlist/${slug}/banner`
                : "/assets/playlist.jpg"
            }
            alt={name}
            width={400}
            height={200}
            className="rounded-xl object-cover h-28"
          />
          <div className="absolute inset-0  justify-center items-center bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100 flex flex-col">
            <CgPlayList className="text-2xl text-white" />
            <div className={"flex flex-row gap-10"}>
              <p className="text-sm text-white flex flex-row gap-1">
                <span className="mr-1">
                  <FaMusic />
                </span>
                {tracksCount}
              </p>
              <p className="text-sm  text-white flex flex-row gap-1 ">
                <span className="mr-1">
                  <FaEye />
                </span>
                {viewCount}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="flex items-center gap-5 ">
            <h1 className="text-sm font-semibold">{name}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PlaylistCard;
