import { Box, Flex, Text } from "@chakra-ui/react";
import { PlaylistCard } from "components/homepage/elements/PlaylistCard";
import { useHomepageModel } from "components/homepage/HomepageModel";
import style from "styles/delete-scroll-bar.module.css";

export const HomepageContent = () => {
  const { playlistCategories } = useHomepageModel();

  return (
    <>
      {playlistCategories.map((el) => (
        <Box style={{ padding: "16px 16px 0" }} key={el.categoryName}>
          <Text fontSize="18px">{el.categoryName}</Text>
          <Flex
            className={style["delete-scroll-bar"]}
            gap="16px"
            overflow="scroll"
          >
            {el.playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} key={playlist.name} />
            ))}
          </Flex>
        </Box>
      ))}
    </>
  );
};
