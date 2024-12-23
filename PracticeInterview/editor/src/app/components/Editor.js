"use client"

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

const Editor = ({ onChange, data }) => {
  const editorRef = useRef();

  useEffect(() => {
    // Initialize Editor.js
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: List,
        paragraph: Paragraph,
      },
      data: data || {}, // Load initial data if provided
      onChange: async () => {
        const savedData = await editorRef.current.save();
        if (onChange) {
          onChange(savedData);
        }
      },
    });

    // Cleanup Editor.js instance
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [data, onChange]);

  return <div id="editorjs" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }} />;
};

export default Editor;
