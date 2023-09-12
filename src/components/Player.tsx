"use client";
import { usePlayer } from "@/stores/player";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
const Player = () => {
    const { current, playlist, isPlaying, togglePlay } = usePlayer();
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    useEffect(() => {
        if (current && audio) {
            isPlaying ? audio?.play() : audio?.pause();
        }
    }, [isPlaying, current]);
    useEffect(() => {
        if (current && !audio) {
            const audio = new Audio(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/mp`
            );
            audio.play();
            setAudio(audio);
        }
    }, [current]);
    return (
        <div
            className={clsx(
                "fixed left-[2.5%] z-10 -bottom-16 transition-all duration-300  h-16 w-[95%] bg-slate-900 rounded-lg flex items-center px-2 justify-between",
                current && "!bottom-[4.2rem]"
            )}
        >
            <div className="flex items-center gap-2">
                <img
                    src={
                        current && current.isHaveThumbnail
                            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/thumbnail`
                            : "https://source.unsplash.com/random"
                    }
                    className="w-14 h-14 rounded-lg"
                />
                <div>
                    <div>{current ? current.title : "Title"}</div>
                    <div>{current ? current.performer : "Artist"}</div>
                </div>
            </div>
            <button
                className="mr-2 text-xl cursor-pointer"
                onClick={togglePlay}
            >
                {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </button>
        </div>
    );
};

export default Player;
