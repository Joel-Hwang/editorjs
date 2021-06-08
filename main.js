import EditorJS from '@editorjs/editorjs';
//import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
//const Paragraph = require('@editorjs/paragraph');
const Warning = require('@editorjs/warning');
const Delimiter = require('@editorjs/delimiter');
const Alert = require('editorjs-alert');
const Paragraph = require('editorjs-paragraph-with-alignment');
const Header = require('editorjs-header-with-anchor');
//import List from '@editorjs/list';
import NestedList from '@editorjs/nested-list';
const Checklist = require('@editorjs/checklist');
//const SimpleImage = require('@editorjs/simple-image');
const LinkTool = require('@editorjs/link');
const AttachesTool = require('@editorjs/attaches');
const Embed = require('@editorjs/embed');
const SimpleImage = require('simple-image-editorjs');
import InlineImage from 'editorjs-inline-image';
const Table = require('editorjs-table');
const CodeBox = require('@bomdi/codebox');
const Marker = require('@editorjs/marker');
const InlineCode = require('@editorjs/inline-code');
import Underline from '@editorjs/underline';
const Hyperlink = require('editorjs-hyperlink');
const EditorJSStyle = require('editorjs-style');
import DragDrop from 'editorjs-drag-drop';


const editor = new EditorJS({ 
    /** 
     * Id of Element that should contain the Editor 
     */ 
    holder: 'editorjs', 
    onReady: () => {
      new DragDrop(editor);
    },
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */ 
    tools: { 
      header: Header,
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: 'Quote\'s author',
        },
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      warning: {
        class: Warning,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+W',
        config: {
          titlePlaceholder: 'Title',
          messagePlaceholder: 'Message',
        },
      },
      delimiter: Delimiter,
      alert: {
        class: Alert,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+A',
        config: {
          defaultType: 'primary',
          messagePlaceholder: 'Enter something',
        },
      },
      list: {
        class: NestedList,
        inlineToolbar: true,
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      image: SimpleImage,
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
        }
      },
      attaches: {
        class: AttachesTool,
        config: {
          endpoint: 'http://localhost:8008/uploadFile'
        }
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      },
      image: {
        class: InlineImage,
        inlineToolbar: true,
        config: {
          embed: {
            display: true,
          },
          unsplash: {
            appName: 'your_app_name',
            clientId: 'your_client_id'
          }
        }
      },
      table: {
        class: Table,
        inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3,
        },
      },
      codeBox: {
        class: CodeBox,
        config: {
          themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
          themeName: 'atom-one-dark', // Optional
          useDefaultTheme: 'light' // Optional. This also determines the background color of the language select drop-down
        }
      },
      Marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M',
      },
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
      },
      underline: Underline,
      hyperlink: {
        class: Hyperlink,
        config: {
          shortcut: 'CMD+L',
          target: '_blank',
          rel: 'nofollow',
          availableTargets: ['_blank', '_self'],
          availableRels: ['author', 'noreferrer'],
          validate: false,
        }
      },
      style: EditorJSStyle.StyleInlineTool,
    }, 
  })

  //  .\node_modules\.bin\webpack --mode development --entry ./main.js --output-path dist