type Playlist = {
  slug: string;
  name: string;
  isHaveBanner: boolean;
  viewCount: number;
  createdAt: string | Date;
  tracksCount: number;
  likesCount: number;
};

type PlaylistType = {
  statusCode: number;
  data: Playlist;
};
