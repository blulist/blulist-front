"use client";
import PlaylistCard from "@/components/PlaylistCard";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { request } from "@/utils/request.util";
import { FaArrowDown } from "react-icons/fa";
import { Button, Spinner } from "@material-tailwind/react";
import { VscLoading } from "react-icons/vsc";
import { FiCommand } from "react-icons/fi";

type PlaylistType = {
  statusCode: number;
  data: {
    playlists: Playlist[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number;
    playlistsCount: number;
  };
};
export function Playlists() {
  const [tops, setTops] = useState<Playlist[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPlaylists = async () => {
      setLoading(true);
      try {
        const { data } = await request.get<PlaylistType>(
          `/playlists?page=${page}&limit=30&sort=view`,
        );
        setTops((prev: any) => [...prev, ...data.data.playlists]);
        setHasNextPage(data.data.hasNextPage);
      } finally {
        setLoading(false);
      }
    };
    getPlaylists();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-2  overflow-x-scroll gap-2 no-scrollbar">
        {tops.map((item, idx) => (
          <PlaylistCard key={`playlists-${idx}`} {...item} />
        ))}
      </div>
      <div className="mt-5 text-center ">
        {hasNextPage && (
          <Button
            variant="outlined"
            color={"light-blue"}
            disabled={loading}
            onClick={() => setPage(page + 1)}
            className="flex items-center gap-3 mx-auto  "
            style={{ maxWidth: "150px" }}
          >
            {loading ? (
              <>
                <Spinner className="h-4 w-4" />
                <span className="mr-2"> صبر کنید...</span>
              </>
            ) : (
              <>
                <FaArrowDown />
                <span className="mr-2">بیشتر</span>
              </>
            )}
          </Button>
        )}
      </div>
    </>
  );
}
