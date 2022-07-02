import React, {useEffect, useRef} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/theme/dracula.css'; // This is imported for Theme CSS
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/mode/javascript/javascript'; // To enable the mode below we need to import this.
import 'codemirror/lib/codemirror.css'; // Editor CSS is imported by this.

import './Editor.css'
import ACTIONS from '../action';


const Editor = ({ socketRef, roomId }) => {

  const editorRef = useRef(null);

  useEffect(() => {
    async function init() {
      editorRef.current = CodeMirror.fromTextArea(document.getElementById("realTimeEditor"), {
        mode: {name: 'javascript', json: true},
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      })

      socketRef.current?.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        console.log('code', code);
        if(code !== null){
          editorRef.current?.setValue(code);
        }
      })


      editorRef.current?.on('change', (instance, changes) => {
        const {origin} = changes;

        // Getting all the code in code editor
        const code = instance.getValue();

        // 
        if(origin !== 'setValue'){
          socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code})
        }
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