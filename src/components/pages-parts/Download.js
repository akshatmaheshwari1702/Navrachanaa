import React from "react";
import Rules from "./rules.pdf";

const Download = () => {
  return (
    <div
      style={{
        textAlign: "center",
        border: "2px solid black",
        width: "30%",
        margin: "0 auto",
        padding: 20,
        borderRadius: 50
      }}
    >
      <a
        style={{ fontSize: 20, color: "black", textDecoration: "none" }}
        // download
        href={Rules}
        download="file"
      >
        Download Rules and Regulations
      </a>
    </div>
  );
};

export default Download;
