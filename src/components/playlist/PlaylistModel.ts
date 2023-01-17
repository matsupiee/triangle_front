import { useHomepageModel } from "components/homepage/HomepageModel";
import { useState } from "react";
import useSound from "use-sound";

export const usePlaylistModel = () => {
  const { playlistCategories } = useHomepageModel();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  const { playlists } = playlistCategories[0];
  const playlist = playlists[0];

  const selectedSong = playlist.songs[selectedSongIndex];

  const [play, { stop }] = useSound(selectedSong.soundSource);

  return {
    name: playlist.name,
    image: playlist.image,
    songs: playlist.songs,
    isPlaying,
    setIsPlaying,
    selectedSong,
    selectedSongIndex,
    setSelectedSongIndex,
    play,
    stop,
  };
};
