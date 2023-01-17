import { Layout } from "components/layout/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import { PlaylistContent } from "components/playlist/PlaylistContent";

const Page: NextPageWithLayout = () => {
  return <PlaylistContent />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
