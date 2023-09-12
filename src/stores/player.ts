import { create } from "zustand";
import axios from "axios";
type PlayerType = {
    isPlaying: boolean;
    current: Track | undefined;
    currentPlaylist: string;
    currentIndex: number | 0;
    playlist: Track[] | [];
    page: number;
    Next: () => void;
    Prev: () => void;
    SetPlaylist: (slug: string) => Promise<void>;
    togglePlay: () => void;
};

export const usePlayer = create<PlayerType>((set, get) => ({
    isPlaying: false,
    currentPlaylist: "",
    current: undefined,
    currentIndex: 0,
    page: 1,
    playlist: [],
    Next: async () => {
        const { page, currentPlaylist, currentIndex, playlist } = get();

        if (currentIndex === playlist.length - 1) {
            const { data } = await axios.get<TracksType>(
                `${
                    process.env.NEXT_PUBLIC_ENDPOINT
                }/playlists/${currentPlaylist}/tracks?page=${page + 1}&limit=10`
            );

            if (currentIndex === playlist.length - 1 && !data.data.length) {
                set(() => ({
                    isPlaying: false,
                    currentPlaylist: "",
                    current: undefined,
                    currentIndex: 0,
                    playlist: [],
                }));
            } else if (
                currentIndex === playlist.length - 1 &&
                data.data.length
            ) {
                set(() => ({
                    playlist: [...playlist, ...data.data],
                    current: data.data[0],
                    currentIndex: currentIndex + 1,
                    page: page + 1,
                }));
            }
        }

        set(() => ({
            current: playlist[currentIndex + 1],
            currentIndex: currentIndex + 1,
        }));
    },
    Prev: () => {
        set(({ currentIndex, playlist }) => {
            if (currentIndex === 0) {
                return {
                    current: playlist[currentIndex - 1],
                    currentIndex: 0,
                };
            }

            return {
                current: playlist[currentIndex - 1],
                currentIndex: currentIndex - 1,
            };
        });
    },
    SetPlaylist: async (slug) => {
        const page = get().page;
        const { data } = await axios.get<TracksType>(
            `${process.env.NEXT_PUBLIC_ENDPOINT}/playlists/${slug}/tracks?page=${page}&limit=10`
        );
        set(() => ({
            playlist: data.data,
            current: data.data[0],
            currentPlaylist: slug,
        }));
    },
    togglePlay: () => {
        set(({ isPlaying }) => ({ isPlaying: !isPlaying }));
    },
}));
