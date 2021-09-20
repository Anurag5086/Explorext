import React from "react";
import Breadcrumb from "./Breadcrumb";
import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";

function Header(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "80.45vw",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#242627",
        color: "white",
      }}
    >
      <Breadcrumb />
      <div style={{ display: "flex" }}>
        <SearchBar />
        <UploadButton />
      </div>
    </div>
  );
}

export default Header;
