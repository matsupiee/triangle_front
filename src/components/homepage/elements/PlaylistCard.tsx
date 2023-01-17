import { Box, Text, Image } from "@chakra-ui/react";
import { Playlist } from "lib/type";
import { useRouter } from "next/router";
// import Image from "next/image";

type Props = {
  playlist: Playlist;
};

export const PlaylistCard = ({ playlist }: Props) => {
  const router = useRouter();

  const handleClickPlaylist = () => {
    router.push(`/playlist/${playlist.id}`);
  };

  return (
    <Box onClick={() => handleClickPlaylist()}>
      <Box h="134px" w="134px">
        {/* <Image
          height={134}
          width={134}
          src={`${playlist.image}?h=134`}
          alt={`thumnail of ${playlist.name}`}
          style={{ objectFit: "cover" }}
        /> */}
        <Image h="134px" w="134px" src={playlist.image} />
      </Box>
      <Text h="26px" textAlign="center" fontSize="16px">
        {playlist.name}
      </Text>
    </Box>
  );
};
