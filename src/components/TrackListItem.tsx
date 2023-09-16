"use client";
import React from "react";
import Image from "next/image";
import { usePlayer } from "@/stores/player";
import { FaPause, FaPlay } from "react-icons/fa";
interface TrackListItemProps extends Track {
  id: number;
  slug: string;
}

const TrackListItem: React.FC<TrackListItemProps> = ({
  duration,
  isHaveThumbnail,
  performer,
  title,
  uniqueId,
  id,
  slug,
}) => {
  const { playById, current, isPlaying } = usePlayer();
  const isNowPlay = isPlaying && current?.uniqueId === uniqueId;
  return (
    <div
      className="flex items-center  mx-2 bg-[#0f1421] px-4 py-2 rounded-xl cursor-pointer relative hover:bg-[#121829]"
      dir="ltr"
      onClick={() => {
        playById(id, slug);
      }}
    >
      <div className="relative flex gap-2 items-center justify-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={
              isHaveThumbnail
                ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${uniqueId}/thumbnail`
                : "/assets/track.jpg"
            }
            alt={`Listen ${title} on BluList`}
            width={50}
            height={50}
          ></Image>
        </div>
        <div className="ml-2">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            {isNowPlay ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
      <div className="text-left font-sans">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-white/50">{performer}</p>
        <p className="text-sm text-white/40">
          {new Date(duration * 1000).toISOString().substr(11, 8)}
        </p>
      </div>
    </div>
  );
};
export default TrackListItem;
