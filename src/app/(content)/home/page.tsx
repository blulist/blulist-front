import PlaylistCard from "@/components/PlaylistCard";
import { NextPage } from "next";
import Image from "next/image";
import UserCard from "@/components/UserCard";
import axios from "axios";
interface Props {}

export const dynamic = "force-dynamic";
type PlaylistType = {
    statusCode: number;
    data: Playlist[];
};
const getPlaylists = async () => {
    const { data } = await axios.get<PlaylistType>(
        `${process.env.API_ENDPOINT}/playlists`
    );
    return data;
};

const Page: NextPage<Props> = async ({}) => {
    const playlists = (await getPlaylists()).data;
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
            <div className="mt-5">
                <h1 className="text-xl">پلی لیست های ویژه</h1>
                <div className="flex mt-2 overflow-x-scroll gap-2 no-scrollbar">
                    {playlists.map((item, idx) => (
                        <PlaylistCard key={`playlists-${idx}`} {...item} />
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-xl">تازه های بلولیست</h1>
                <div className="flex mt-2 overflow-x-scroll gap-2 no-scrollbar">
                    {playlists.map((item, idx) => (
                        <PlaylistCard key={`new-playlists-${idx}`} {...item} />
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-xl">کاربران برتر</h1>
                <div className="flex mt-2 overflow-x-scroll gap-2 no-scrollbar">
                    {playlists.map((item, idx) => (
                        <UserCard
                            key={`users-${idx}`}
                            image_url={"https://source.unsplash.com/random"}
                            username={item.name}
                            displayname={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
