import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { PlayerContent } from "components/player/PlayerContent";
import { useEffect, useRef } from "react";
import { usePlaylistModel } from "./PlaylistModel";

export const PlaylistContent = () => {
  const {
    name,
    image,
    songs,
    isPlaying,
    setIsPlaying,
    selectedSong,
    nextIndex,
    previousIndex,
    setSelectedSongIndex,
  } = usePlaylistModel();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const pause = () => {
    if (audioRef.current) audioRef.current.pause();
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const skip = (index: number) => {
    setIsPlaying(true);
    setSelectedSongIndex(index);
  };

  const skipToNext = () => {
    skip(nextIndex);
  };

  const skipToPrevious = () => {
    skip(previousIndex);
  };

  useEffect(() => {
    if (isPlaying) play();
  }, [selectedSong]);

  return (
    <Box>
      <Box h="156px" margin="32px auto" w="156px">
        <Image h="156px" w="156px" src={image} />
      </Box>
      <Heading as="h1" m="0 16px">
        {name}
      </Heading>
      <Box>
        {songs.map((song, i) => (
          <Flex h="72px" justifyContent="space-between" key={i}>
            <Flex alignItems="center" p="8px 0" w="100%" onClick={onOpen}>
              <Box m="0 16px">{i + 1}</Box>
              <Box>
                <Text overflow="hidden" fontSize="16px">
                  {song.name}
                </Text>
                <Text overflow="hidden" fontSize="13px">
                  {song.artistName}
                </Text>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Box>
      <PlayerContent
        song={selectedSong}
        isOpen={isOpen}
        onClose={onClose}
        isPlaying={isPlaying}
        handleClickPlayButton={handleTogglePlay}
        skipToNextSong={skipToNext}
        skipToPreviousSong={skipToPrevious}
      />
      <audio src={selectedSong.soundSource} ref={audioRef} />
    </Box>
  );
};
