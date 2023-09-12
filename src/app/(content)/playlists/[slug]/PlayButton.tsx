"use client";
import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { usePlayer } from "@/stores/player";

type PlayButtonProps = {
    tracks: Track[];
};

const PlayButton: React.FC<PlayButtonProps> = ({ tracks }) => {
    const { SetPlaylist, isPlaying, togglePlay } = usePlayer();
    const handlePlayPlaylist = () => {
        SetPlaylist(tracks);
        togglePlay();
    };
    return (
        <div
            className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full my-5 cursor-pointer"
            onClick={handlePlayPlaylist}
        >
            {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
    );
};

export default PlayButton;
