import Link from "next/link";
import React from "react";
import { AiFillEye, AiTwotoneHeart } from "react-icons/ai";
import { BiSolidMusic } from "react-icons/bi";

const PlaylistItem: React.FC<Playlist> = ({
  isHaveBanner,
  likesCount,
  name,
  slug,
  tracksCount,
  viewCount,
}) => {
  return (
    <Link
      className="w-[60vw] h-16 bg-gray-900  rounded-lg overflow-hidden mx-auto flex items-center justify-between"
      dir="rtl"
      href={`playlists/${slug}`}
    >
      <img
        src={
          isHaveBanner
            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/playlist/${slug}/banner`
            : "/assets/playlist.jpg"
        }
        alt={`Listen ${name} on blulist`}
        width={50}
        loading={"lazy"}
        height={50}
        className="w-28 h-28"
      />
      <div>
        <div>{name} </div>
      </div>
      <div className="ml-2">
        <div className="flex items-center justify-center gap-2 text-white/70">
          <div className="flex items-center justify-center gap-1">
            <AiFillEye className="text-blue-400" /> {viewCount}
          </div>
          <div className="flex items-center justify-center gap-1">
            <AiTwotoneHeart className="text-blue-400" /> {likesCount}
          </div>
          <div className="flex items-center justify-center gap-1">
            <BiSolidMusic className="text-blue-400" /> {tracksCount}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PlaylistItem;
