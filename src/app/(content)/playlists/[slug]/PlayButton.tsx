"use client";
import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { usePlayer } from "@/stores/player";

type PlayButtonProps = {
    slug: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({ slug }) => {
    const { SetPlaylist, isPlaying, togglePlay, currentPlaylist } = usePlayer();
    const handlePlayPlaylist = () => {
        if (currentPlaylist === slug) {
            togglePlay();
        } else {
            SetPlaylist(slug);
            if (!isPlaying) {
                togglePlay();
            }
        }
    };
    return (
        <div
            className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full my-5 cursor-pointer"
            onClick={handlePlayPlaylist}
        >
            {isPlaying && currentPlaylist === slug ? (
                <BsFillPauseFill />
            ) : (
                <BsFillPlayFill />
            )}
        </div>
    );
};

export default PlayButton;
