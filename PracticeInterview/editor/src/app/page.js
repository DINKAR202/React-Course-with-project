"use client"

import { useState } from "react";
import dynamic from "next/dynamic";
import Editor from "./components/Editor";

export default function Home() {
  const [editorData, setEditorData] = useState(null);

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  const handleSave = () => {
    console.log("Saved Data:", editorData);
    // Optionally, send `editorData` to your server
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editor.js with Next.js</h1>
      <Editor onChange={handleEditorChange} />
      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save Content
      </button>
    </div>
  );
}