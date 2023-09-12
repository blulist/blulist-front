import React from "react";
import Image from "next/image";
interface TrackListItemProps extends Track {
    id: number;
}

const TrackListItem: React.FC<TrackListItemProps> = ({
    duration,
    isHaveThumbnail,
    performer,
    title,
    uniqueId,
    id,
}) => {
    return (
        <div
            className="flex items-center  mx-2 bg-slate-800 px-4 py-2 rounded-xl cursor-pointer"
            dir="ltr"
        >
            <div className="flex gap-2 items-center justify-center">
                <Image
                    src={
                        isHaveThumbnail
                            ? `${process.env.NEXT_PUBLIC_ENDPOINT}/stream/track/${uniqueId}/thumbnail`
                            : "https://source.unsplash.com/random"
                    }
                    alt={`Listen ${title} on BluList`}
                    width={50}
                    height={50}
                    className="h-[50px] w-[50px]"
                ></Image>
                <div className="text-left font-sans">
                    <p className="text-sm">{title}</p>
                    <p className="text-sm text-white/50">{performer}</p>
                    <p className="text-sm text-white/40">
                        {new Date(duration * 1000).toISOString().substr(11, 8)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrackListItem;
