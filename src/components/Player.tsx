"use client";
import { usePlayer } from "@/stores/player";
const Player = () => {
    const {} = usePlayer();
    return (
        <div className="fixed left-[2.5%] z-10 bottom-[4.2rem] h-16 w-[95%] bg-red-500 "></div>
    );
};

export default Player;
