import { useHomepageModel } from "components/homepage/HomepageModel";
import { useEffect, useState } from "react";

export const usePlaylistModel = () => {
  const { playlistCategories } = useHomepageModel();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  const { playlists } = playlistCategories[0];
  const playlist = playlists[0];

  const selectedSong = playlist.songs[selectedSongIndex];

  const nextIndex =
    selectedSongIndex === playlist.songs.length - 1 ? 0 : selectedSongIndex + 1;

  const previousIndex =
    selectedSongIndex === 0 ? playlist.songs.length - 1 : selectedSongIndex - 1;

  return {
    name: playlist.name,
    image: playlist.image,
    songs: playlist.songs,
    isPlaying,
    setIsPlaying,
    selectedSong,
    nextIndex,
    previousIndex,
    setSelectedSongIndex,
  };
};
