import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { PlayerContent } from "components/player/PlayerContent";
// import Image from "next/image";
import { usePlaylistModel } from "./PlaylistModel";

export const PlaylistContent = () => {
  const {
    name,
    image,
    songs,
    isPlaying,
    setIsPlaying,
    selectedSong,
    selectedSongIndex,
    setSelectedSongIndex,
    play,
    stop,
  } = usePlaylistModel();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickPlayButton = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
      return;
    }
    play();
    setIsPlaying(true);
  };

  return (
    <Box>
      {/* <Image src={image} alt={`thumnail of ${name}`} height={134} width={134} /> */}
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
        handleClickPlayButton={handleClickPlayButton}
      />
    </Box>
  );
};
