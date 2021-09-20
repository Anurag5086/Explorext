import React, { useEffect, useState } from "react";
import { getDocumentsAction } from "../actions/Document";
import DocumentImage from "../assets/document.png";

function DisplayFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getDocumentsAction((data) => data.json()).then((data) => setFiles(data));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        backgroundColor: "#242627",
        height: "88.5vh",
      }}
    >
      {files.map((file) =>
        file.type === "File" ? (
          <div style={{ margin: "20px", textAlign: "center" }}>
            <img src={DocumentImage} alt="" width="75px" />
            <p style={{ marginTop: "0px", color: "white" }}>{file.name}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default DisplayFiles;
