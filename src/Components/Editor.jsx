import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/theme/dracula.css"; // This is imported for Theme CSS
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/mode/javascript/javascript"; // To enable the mode below we need to import this.
import "codemirror/lib/codemirror.css"; // Editor CSS is imported by this.

import "./Editor.css";
import ACTIONS from "../action";

const Editor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef(null);
  
  useEffect(() => {
    async function init() {
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realTimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );

      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        
        // Getting all the code in code editor
        const code = instance.getValue();
        
        // As soon as someone types in editor, fresh code will be sent to parent component
        onCodeChange(code);
        if (origin !== "setValue") {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });
    }
    init();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }

    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE);
    };
  }, [socketRef.current]);

  return (
    // Idea is to attach this textarea with CodeMirror so that this will be converted into a Editor
    <textarea id="realTimeEditor" />
  );
};

export default Editor;
