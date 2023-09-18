type Track = {
  uniqueId: string;
  title: string;
  performer: string;
  duration: number;
  isHaveThumbnail: boolean;
};

type TracksType = {
  statusCode: number;
  data: {
    tracks: Track[];
    tracksCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number;
  };
};
