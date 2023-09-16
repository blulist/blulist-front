import { NextPage } from "next";
import Image from "next/image";
import axios from "axios";
import { AiFillEye, AiTwotoneHeart } from "react-icons/ai";
import { BsDownload, BsFillShareFill } from "react-icons/bs";
import PlayButton from "./PlayButton";
import TrackListItem from "@/components/TrackListItem";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamic = "force-dynamic";
const getPlaylistData = async (slug: string) => {
  const { data } = await axios.get<PlaylistType>(
    `${process.env.API_ENDPOINT}/playlists/${slug}`,
  );

  return data;
};

const getInitialTracks = async (slug: string) => {
  const { data } = await axios.get<TracksType>(
    `${process.env.API_ENDPOINT}/playlists/${slug}/tracks?limit=10&page=1`,
  );

  return data;
};

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const {
    data: { name, likesCount, viewCount, isHaveBanner, tracksCount, createdAt },
  } = await getPlaylistData(slug);
  const tracks = (await getInitialTracks(slug)).data;

  return (
    <div
      className="text-center pt-1 w-full flex flex-col items-center mb-24"
      dir="rtl"
    >
      <Image
        src={
          isHaveBanner
            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/playlist/${slug}/banner`
            : "/assets/playlist.jpg"
        }
        alt={`Listen ${name} on blulist`}
        width={200}
        height={200}
        className="rounded-xl mt-5 object-cover"
      />
      <h2 className="mt-5 text-xl">{name}</h2>
      <div className="w-full">
        <div className="mx-auto flex items-center justify-center gap-4">
          <div className="w-[35px] h-[35px] bg-gray-700 flex items-center justify-center rounded-full my-5 cursor-pointer">
            <a href={`https://t.me/bluListBot?start=${slug}`} target={"_blank"}>
              <BsDownload />
            </a>
          </div>
          <PlayButton slug={slug} />
          <div className="w-[35px] h-[35px] bg-gray-700 flex items-center justify-center rounded-full my-5 cursor-pointer">
            <a href={`https://t.me/bluListBot?start=${slug}`} target={"_blank"}>
              <BsFillShareFill />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between mx-4">
          <h4 className=" flex gap-2 items-center justify-center text-white/70">
            {tracksCount} موزیک
          </h4>
          <div className="flex items-center justify-center gap-4 text-white/70">
            <div className="flex items-center justify-center gap-1">
              <AiFillEye className="text-blue-400" /> {viewCount}
            </div>
            <div className="flex items-center justify-center gap-1">
              <AiTwotoneHeart className="text-blue-400" /> {likesCount}
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-3 mt-3 hidden-scroll max-h-[400px]">
          {tracks.map((item, idx) => (
            <TrackListItem
              key={`playlist-item-${idx}`}
              {...item}
              id={idx}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
