import React from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Editor from './Editor';
import Toolbar from './Toolbar';

function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
  });
  return (
    <div>
      <Toolbar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default RichTextEditor;
