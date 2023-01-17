import { Playlist, PlaylistCategory, Song } from "lib/type";

export const useHomepageModel = () => {
  const soundSource = [
    "/music/September Dub - Gahji.mp3",
    "/music/ShiningMoss.mp3",
    "/music/china song 2.mp3",
    "/music/EndingsTheII-GahjiTheSweetDreams.mp3",
    "/music/Vibrant Three Ladies - Gahji The Sweet Dreams.mp3",
  ];
  const songs: Song[] = soundSource.map((el, i) => {
    return {
      name: "sample name",
      artistName: "ggg",
      image: "/image/lp/juke5.png",
      soundSource: el,
    };
  });
  const images = [
    "/image/lp/juke1.png",
    "/image/lp/juke2.png",
    "/image/lp/juke3.png",
    "/image/lp/juke4.png",
    "/image/lp/juke5.png",
  ];
  const playlists: Playlist[] = images.map((el, i) => {
    return {
      id: "gggggggg" + i,
      name: "example" + i,
      image: el,
      songs,
    };
  });

  const thisWeekSpotlight: PlaylistCategory = {
    categoryName: "This week spotlight",
    playlists,
  };

  const chart: PlaylistCategory = {
    categoryName: "Chart",
    playlists,
  };

  const focus: PlaylistCategory = {
    categoryName: "Focus",
    playlists,
  };
  const popularNewRelease: PlaylistCategory = {
    categoryName: "Popular new release",
    playlists,
  };

  const playlistCategories: PlaylistCategory[] = [
    thisWeekSpotlight,
    chart,
    focus,
    popularNewRelease,
  ];
  return { playlistCategories };
};
