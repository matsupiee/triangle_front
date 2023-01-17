import { HomepageContent } from "components/homepage/HomepageContent";
import { Layout } from "components/layout/Layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";

const Page: NextPageWithLayout = () => {
  return <HomepageContent />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
