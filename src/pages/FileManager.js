import React from "react";
import DisplayFiles from "../components/DisplayFiles";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function FileManager() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <Header />
        <DisplayFiles />
      </div>
    </div>
  );
}

export default FileManager;
