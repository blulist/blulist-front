import { create } from "zustand";

type PlayerType = {
    current: Track | undefined;
    currentIndex: number | 0;
    playlist: Track[] | [];
    Next: () => void;
    Prev: () => void;
    SetPlaylist: (playlist: Track[]) => void;
};

export const usePlayer = create<PlayerType>((set) => ({
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
}));
