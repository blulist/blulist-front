import PlaylistCard from "@/components/PlaylistCard";
import { NextPage } from "next";
import Image from "next/image";
import axios from "axios";
import { Playlists } from "@/components/Playlists";

interface Props {}

export const dynamic = "force-dynamic";

const Page: NextPage<Props> = async ({}) => {
  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-center py-5 md:hidden">
        <Image
          src="/logo.png"
          alt="Blulist logo"
          width={40}
          height={40}
        ></Image>
        <h1 className="text-xl">بلولیست</h1>
      </div>
      <div className="mt-5 mb-20">
        <h1 className="text-xl">پلی لیست ها</h1>
        <Playlists />
      </div>
    </div>
  );
};

export default Page;
