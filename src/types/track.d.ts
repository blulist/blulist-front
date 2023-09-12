type Track = {
    uniqueId: string;
    title: string;
    performer: string;
    duration: number;
    isHaveThumbnail: boolean;
};

type TracksType = {
    statusCode: number;
    data: Track[];
};
