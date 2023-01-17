export type Song = {
  //   id: string;
  name: string;
  // アーティストテーブルがあるならid
  artistName: string;
  // アルバムテーブルがあるならid
  // albumName:  string
  image: string;
  soundSource: string;
};

export type Playlist = {
  id: string;
  name: string; // 例:「成人の日のための曲まとめ」など
  image: string; // プレイリストのサムネ
  songs: Song[]; // プレイリストに入っている曲の配列
};

export type PlaylistCategory = {
  categoryName: string;
  playlists: Playlist[];
};
