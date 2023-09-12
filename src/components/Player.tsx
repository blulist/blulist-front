"use client";
import { usePlayer } from "@/stores/player";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsFillPauseFill, BsFillPlayFill, BsSkipEndFill } from "react-icons/bs";
const Player = () => {
    const { current, playlist, isPlaying, togglePlay, Next } = usePlayer();
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [currentTrackId, setCurrentTrackId] = useState("");
    useEffect(() => {
        if (current && audio) {
            isPlaying ? audio?.play() : audio?.pause();
        }
    }, [isPlaying, current]);
    useEffect(() => {
        console.log(current?.uniqueId !== currentTrackId);
        if (current && !audio) {
            const currentaudio = new Audio(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/mp`
            );
            currentaudio.play();
            currentaudio.addEventListener("ended", () => {
                Next();
            });
            setAudio(currentaudio);
            setCurrentTrackId(current.uniqueId);
        } else if (current && audio && current?.uniqueId !== currentTrackId) {
            audio.pause();
            const currentaudio = new Audio(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/mp`
            );
            currentaudio.play();
            currentaudio.addEventListener("ended", () => {
                Next();
            });
            setAudio(currentaudio);
        }
    }, [current]);
    useEffect(() => {
        if (audio) {
        }
    }, [audio]);
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
            <div>
                {" "}
                <button
                    className="mr-2 text-xl cursor-pointer"
                    onClick={togglePlay}
                >
                    {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
                </button>
                <button className="mr-2 text-xl cursor-pointer" onClick={Next}>
                    <BsSkipEndFill />
                </button>
            </div>
        </div>
    );
};

export default Player;
