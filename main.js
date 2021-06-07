import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 

const editor = new EditorJS({ 
    /** 
     * Id of Element that should contain the Editor 
     */ 
    holder: 'editorjs', 
    
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */ 
    tools: { 
      header: Header, 
    }, 
  })

  //  .\node_modules\.bin\webpack --mode development --entry ./main.js --output-path dist