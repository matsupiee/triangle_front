import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Box,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Song } from "lib/type";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/Ai";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { BsChevronDown, BsThreeDots } from "react-icons/bs";

type Props = {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  handleClickPlayButton: () => void;
};

export const PlayerContent = (props: Props) => {
  const { song, isOpen, onClose, isPlaying, handleClickPlayButton } = props;

  return (
    <Drawer size="full" isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <BsChevronDown size="24px" onClick={onClose} />
            <Heading as="h2" size="sm">
              {song.name}
            </Heading>
            <BsThreeDots size="24px" />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Box>
            <Box margin="56px 0">
              <Image src={song.image} height={455} width={365} alt="" />
            </Box>
            <Box>
              <Heading as="h1">{song.name}</Heading>
              <Text>{song.artistName}</Text>
            </Box>
            <Flex
              alignItems="center"
              gap="40px"
              justifyContent="center"
              margin="24px 0"
            >
              <IconButton
                bg="transparent"
                icon={<IoPlaySkipBackSharp size="32px" />}
                aria-label="skip-back"
              />
              <IconButton
                bg="transparent"
                icon={
                  isPlaying ? (
                    <AiFillPauseCircle size="56px" />
                  ) : (
                    <AiFillPlayCircle size="56px" />
                  )
                }
                aria-label="play or pause"
                onClick={handleClickPlayButton}
              />
              <IconButton
                bg="transparent"
                icon={<IoPlaySkipForwardSharp size="32px" />}
                aria-label="skip-forward"
              />
            </Flex>
          </Box>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
