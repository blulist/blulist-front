import PlaylistCard from "@/components/PlaylistCard";
import { NextPage } from "next";
import Image from "next/image";
import UserCard from "@/components/UserCard";
interface Props {}

const getPlaylists = async () => {
    const data = [
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
        {
            id: "lao13",
            title: "لوفی",
            image_url:
                "https://assets.rjassets.com/static/playlist/5883691/9b823fe2cea6d6c.jpg",
        },
    ];

    return data;
};

const Page: NextPage<Props> = async ({}) => {
    const playlists = await getPlaylists();
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
                        <PlaylistCard key={`playlists-${idx}`} {...item} />
                    ))}
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-xl">کاربران برتر</h1>
                <div className="flex mt-2 overflow-x-scroll gap-2 no-scrollbar">
                    {playlists.map((item, idx) => (
                        <UserCard
                            key={`users-${idx}`}
                            image_url={item.image_url}
                            username={item.id}
                            displayname={item.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
