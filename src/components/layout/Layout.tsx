import { FC, ReactNode } from "react";
import { Header } from "components/layout/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: "1080px", width: "100%" }}>
      <Header />
      <div style={{ paddingTop: "56px" }}>{children}</div>
    </div>
  );
};
