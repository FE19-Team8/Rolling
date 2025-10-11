import React from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Editor from './Editor';
import Toolbar from './Toolbar/Toolbar';

function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph', 'listItem'] }),
    ],
  });
  return (
    <div className="w-[720px] h-[260px] border border-gray-300 rounded-[16px] overflow-hidden">
      <Toolbar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default RichTextEditor;
