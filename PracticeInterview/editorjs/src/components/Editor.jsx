import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link", "bold", "italic"],
          config: {
            placeholder: "Enter a header",
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8000/uploadFile", // Replace with your endpoint
              byUrl: "http://localhost:8000/fetchUrl",    // Replace with your endpoint
            },
          },
        },
      },
      autofocus: true,
    });

    editorRef.current = editor;

    return () => {
      // Cleanup the editor instance
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const saveData = async () => {
    if (editorRef.current) {
      const outputData = await editorRef.current.save();
      console.log("Saved data:", outputData);
    }
  };

  return (
    <div>
      <div
        id="editorjs"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "200px",
        }}
      ></div>
      <button onClick={saveData} style={{ marginTop: "10px" }}>
        Save Content
      </button>
    </div>
  );
};

export default Editor;
