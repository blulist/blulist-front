import { create } from "zustand";

type PlayerType = {
    isPlaying: boolean;
    current: Track | undefined;
    currentIndex: number | 0;
    playlist: Track[] | [];
    Next: () => void;
    Prev: () => void;
    SetPlaylist: (playlist: Track[]) => void;
    togglePlay: () => void;
};

export const usePlayer = create<PlayerType>((set) => ({
    isPlaying: false,
    current: undefined,
    currentIndex: 0,
    playlist: [],
    Next: () => {},
    Prev: () => {},
    SetPlaylist: (newplaylist) => {
        set(({ playlist, current }) => ({
            playlist: newplaylist,
            current: newplaylist[0],
        }));
    },
    togglePlay: () => {
        set(({ isPlaying }) => ({ isPlaying: !isPlaying }));
    },
}));
