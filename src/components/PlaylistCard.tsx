"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgPlayList } from "react-icons/cg";
type PlaylistCardProps = {
    image_url: string;
    id: string;
    title: string;
};
const PlaylistCard: React.FC<PlaylistCardProps> = ({
    image_url,
    id,
    title,
}) => {
    return (
        <div className=" w-[150px] min-w-[150px] lg:w-[200px]">
            <Link href={`/playlist/${id}`}>
                <Image
                    src={image_url}
                    alt={title}
                    width={150}
                    height={150}
                    className="rounded-xl lg:w-[200px]"
                ></Image>
                <div className="flex justify-between px-2 pt-1">
                    <h1>{title}</h1> <CgPlayList className="text-2xl" />
                </div>
            </Link>
        </div>
    );
};

export default PlaylistCard;
