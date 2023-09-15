"use client";

import { NextPage } from "next";
import axios from "axios";
import PlaylistItem from "@/components/PlaylistItem";
import { useEffect, useRef, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useIsInViewport } from "@/hooks/useIsInViewport";
interface Props {}
type PlaylistType = {
    statusCode: number;
    data: Playlist[];
};

const Page: NextPage<Props> = ({}) => {
    const loadingRef = useRef(null);
    const isLoadingInView = useIsInViewport(loadingRef);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [loadmore, setLoadmore] = useState(false);
    useEffect(() => {
        const getPlaylists = async () => {
            const { data } = await axios.get<PlaylistType>(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/playlists?limit=20`
            );
            setPlaylists([...data.data]);
            setLoadmore(true);
        };
        getPlaylists();
    }, []);

    const handleLoadMore = async () => {
        if (loadmore && !loading) {
            setLoading(true);
            const { data } = await axios.get<PlaylistType>(
                `${process.env.NEXT_PUBLIC_ENDPOINT}/playlists?limit=20&page=${
                    currentPage + 1
                }`
            );
            if (data.data.length > 0) {
                setPlaylists((prev) => [...prev, ...data.data]);
            } else if (data.data.length === 0) {
                setLoadmore(false);
            }
        }
    };
    useEffect(() => {
        if (isLoadingInView && loadmore) {
            handleLoadMore();
        }
    }, [isLoadingInView, playlists]);
    return (
        <div className="min-h-screen mx-auto flex flex-col gap-5 items-center mb-5">
            <div className="mt-5 text-2xl">پلی لیست ها</div>
            {playlists.length > 0 &&
                playlists.map((item, idx) => (
                    <PlaylistItem key={`playlist-item-${idx}`} {...item} />
                ))}
            <div ref={loadingRef} className="h-20">
                {loadmore && (
                    <AiOutlineReload className="animate-spin text-3xl" />
                )}
            </div>
        </div>
    );
};

export default Page;
