"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgPlayList } from "react-icons/cg";
type UserCardProps = {
    image_url: string;
    username: string;
    displayname: string;
};
const UserCard: React.FC<UserCardProps> = ({
    image_url,
    username,
    displayname,
}) => {
    return (
        <div className=" w-[100px] min-w-[100px]">
            <Link href={`/user/${username}`}>
                <Image
                    src={image_url}
                    alt={displayname}
                    width={100}
                    height={100}
                    className="rounded-full"
                ></Image>
                <div className="flex justify-center px-2 pt-1">
                    <h1>{displayname}</h1>
                </div>
            </Link>
        </div>
    );
};

export default UserCard;
