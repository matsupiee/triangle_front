import { HiMenu } from "react-icons/Hi";
import { HiSearch } from "react-icons/Hi";

export const Header = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        height: "56px",
        left: "0",
        marginTop: "-1px", // 要素の上の隙間を埋める
        padding: "16px",
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ height: "16px", fontSize: "16px", color: "white" }}>
        <a>Triangle</a>
      </h1>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "16px",
        }}
      >
        <HiSearch size="24px" color="white" />
        <input
          style={{
            height: "32px",
            width: "124px",
            border: "none",
            borderRadius: "500px",
            outline: "none",
            WebkitAppearance: "none",
          }}
        />
        <HiMenu size="24px" color="white" />
      </div>
    </div>
  );
};
