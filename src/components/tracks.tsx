"use client";
import TrackListItem from "@/components/TrackListItem";
import { useEffect, useState } from "react";
import { request } from "@/utils/request.util";
import { Button, Spinner } from "@material-tailwind/react";
import { FaArrowDown } from "react-icons/fa";

export function Tracks({ slug }: { slug: string }) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInitialTracks = async (slug: string) => {
      setLoading(true);
      try {
        const { data } = await request.get<TracksType>(
          `/playlists/${slug}/tracks?limit=10&page=${page}`,
        );
        setTracks((perv: Track[]) => [...perv, ...data.data.tracks]);
        setHasNextPage(data.data.hasNextPage);
      } finally {
        setLoading(false);
      }
    };
    getInitialTracks(slug);
  }, [page]);

  return (
    <>
      <div className="mx-auto flex flex-col gap-3 mt-3 hidden-scroll max-h-[750px] mb-20 overflow-x-scroll  no-scrollbar">
        {tracks.map((item, idx) => (
          <TrackListItem
            key={`playlist-item-${idx}`}
            {...item}
            id={idx}
            slug={slug}
          />
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
