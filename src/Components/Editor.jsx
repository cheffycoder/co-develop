import React, {useEffect} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/theme/dracula.css'; // This is imported for Theme CSS
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/mode/javascript/javascript'; // To enable the mode below we need to import this.
import 'codemirror/lib/codemirror.css'; // Editor CSS is imported by this.

import './Editor.css'


const Editor = () => {

  useEffect(() => {
    async function init() {
      CodeMirror.fromTextArea(document.getElementById("realTimeEditor"), {
        mode: {name: 'javascript', json: true},
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      })
    }
    init();
  }, [])
  

  return (
    // Idea is to attach this textarea with CodeMirror so that this will be converted into a Editor
    <textarea id="realTimeEditor"></textarea>
  )
}

export default Editor