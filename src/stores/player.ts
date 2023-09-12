import { create } from "zustand";

type PlayerType = {
    isPlaying: boolean;
    current: Track | undefined;
    currentPlaylist: string;
    currentIndex: number | 0;
    playlist: Track[] | [];
    Next: () => void;
    Prev: () => void;
    SetPlaylist: (playlist: Track[], slug: string) => void;
    togglePlay: () => void;
};

export const usePlayer = create<PlayerType>((set) => ({
    isPlaying: false,
    currentPlaylist: "",
    current: undefined,
    currentIndex: 0,
    playlist: [],
    Next: () => {
        set(({ current, currentIndex, playlist }) => {
            if (currentIndex === playlist.length - 1) {
                return {
                    isPlaying: false,
                    currentPlaylist: "",
                    current: undefined,
                    currentIndex: 0,
                    playlist: [],
                };
            }

            return {
                current: playlist[currentIndex + 1],
                currentIndex: currentIndex + 1,
            };
        });
    },
    Prev: () => {},
    SetPlaylist: (newplaylist, slug) => {
        set(({ playlist, current }) => ({
            playlist: newplaylist,
            current: newplaylist[0],
            currentPlaylist: slug,
        }));
    },
    togglePlay: () => {
        set(({ isPlaying }) => ({ isPlaying: !isPlaying }));
    },
}));
