"use client";
import { usePlayer } from "@/stores/player";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import {
    BsChevronCompactDown,
    BsFillPauseFill,
    BsFillPlayFill,
    BsSkipEndFill,
    BsSkipStartFill,
} from "react-icons/bs";
const Player = () => {
    const { current, playlist, isPlaying, togglePlay, Next, Prev } =
        usePlayer();
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [currentTrackId, setCurrentTrackId] = useState("");
    useEffect(() => {
        if (current && audio) {
            isPlaying ? audio?.play() : audio?.pause();
        }
    }, [isPlaying, current]);
    useEffect(() => {
        if (current && !audio) {
            console.log("new");
            const currentaudio = new Audio(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/mp`
            );
            currentaudio.preload = "auto";
            currentaudio.addEventListener("ended", () => {
                Next();
            });
            currentaudio.addEventListener("timeupdate", () => {
                if (timeElapsed !== Math.round(currentaudio.currentTime)) {
                    setTimeElapsed(Math.round(currentaudio.currentTime));
                }
            });
            currentaudio.play();

            setAudio(currentaudio);
            setCurrentTrackId(current.uniqueId);
        } else if (current && audio && current?.uniqueId !== currentTrackId) {
            console.log("change");
            audio.pause();
            const currentaudio = new Audio(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/mp`
            );
            currentaudio.preload = "auto";
            currentaudio.addEventListener("ended", () => {
                Next();
            });
            currentaudio.addEventListener("timeupdate", () => {
                if (timeElapsed !== Math.round(currentaudio.currentTime)) {
                    setTimeElapsed(Math.round(currentaudio.currentTime));
                }
            });
            currentaudio.play();
            setAudio(currentaudio);
            setCurrentTrackId(current.uniqueId);
        } else if (!current && audio) {
            console.log("end");
            audio.pause();
            setAudio(null);
        }
    }, [current]);
    const [fullScreen, setFullScreen] = useState(false);
    return (
        <div
            className={twMerge(
                "fixed left-[2.5%] z-10 -bottom-16 transition-all duration-300  h-16 w-[95%] bg-slate-900/60 backdrop-blur-lg rounded-lg flex items-center px-2 justify-between",
                current && "!bottom-[4.2rem] ",
                !!current &&
                    fullScreen &&
                    "h-screen !bottom-[0rem] w-full !left-[0%] flex-col !justify-center bg-slate-900"
            )}
        >
            <BiChevronDown
                className={twMerge(
                    "absolute top-16 right-6 text-2xl  h-10 w-10 rounded-full hidden",
                    fullScreen && "!flex"
                )}
                onClick={() => {
                    setFullScreen((prev) => !prev);
                }}
            />
            <div
                className={twMerge(
                    "flex items-center gap-2 transition-all duration-300",
                    !!current &&
                        fullScreen &&
                        "flex-col w-[85vw] max-w-[400px] "
                )}
                onClick={() => {
                    setFullScreen((prev) => !prev);
                }}
            >
                <img
                    src={
                        current && current.isHaveThumbnail
                            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${current.uniqueId}/thumbnail`
                            : "https://source.unsplash.com/random"
                    }
                    className={twMerge(
                        "w-14 h-14 rounded-lg transition-all duration-300",
                        !!current &&
                            fullScreen &&
                            "w-[85vw] h-[85vw] max-w-[400px] max-h-[400px]"
                    )}
                />
                <div
                    className={twMerge(
                        "font-sans",
                        fullScreen && "text-center mt-3"
                    )}
                >
                    <div className="whitespace-nowrap">
                        {current ? current.title.slice(0, 20) : "Title"}
                    </div>
                    <div className="text-white/50 font-light">
                        {current ? current.performer : "Artist"}
                    </div>
                </div>
            </div>
            <div
                className={twMerge(
                    "hidden flex-col w-[90%] mt-10",
                    fullScreen && "flex "
                )}
            >
                <div>
                    <div>
                        <input
                            type="range"
                            value={timeElapsed}
                            max={audio ? audio.duration : undefined}
                            onChange={(e) => {
                                if (audio) {
                                    audio.currentTime = +e.target.value;
                                }
                            }}
                            className="player-range w-full "
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-3">
                    <div>
                        {new Date(timeElapsed * 1000)
                            .toISOString()
                            .substr(11, 8)}
                    </div>
                    <div>
                        <div>
                            {new Date(
                                (audio && audio.duration ? audio.duration : 0) *
                                    1000
                            )
                                .toISOString()
                                .substr(11, 8)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={twMerge("flex", fullScreen && " gap-5 mt-5")}>
                <button
                    className={twMerge(
                        "mr-2 text-xl cursor-pointer hidden ",
                        fullScreen && "!block text-3xl"
                    )}
                    onClick={Prev}
                >
                    <BsSkipStartFill />
                </button>

                <button
                    className={twMerge(
                        "mr-2 text-2xl cursor-pointer",
                        fullScreen && " text-3xl bg-white/30 p-3 rounded-full"
                    )}
                    onClick={togglePlay}
                >
                    {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
                </button>
                <button
                    className={twMerge(
                        "mr-2 text-2xl cursor-pointer",
                        fullScreen && "text-3xl"
                    )}
                    onClick={Next}
                >
                    <BsSkipEndFill />
                </button>
            </div>
        </div>
    );
};

export default Player;
