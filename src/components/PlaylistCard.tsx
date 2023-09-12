"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgPlayList } from "react-icons/cg";

const PlaylistCard: React.FC<Playlist> = ({ name, slug, isHaveBanner }) => {
    return (
        <div className="w-[250px]  min-w-[150px]  lg:w-[400px]" dir="rtl">
            <Link href={`/playlists/${slug}`}>
                <Image
                    src={
                        isHaveBanner
                            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/playlist/${slug}/banner`
                            : "https://source.unsplash.com/random"
                    }
                    alt={name}
                    width={150}
                    height={150}
                    className="h-[100px] rounded-xl lg:w-[400px] lg:h-[200px] object-cover"
                ></Image>
                <div className="flex justify-between px-2 pt-1">
                    <h1>{name}</h1> <CgPlayList className="text-2xl" />
                </div>
            </Link>
        </div>
    );
};

export default PlaylistCard;
