import { forwardRef, useImperativeHandle } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Editor from './Editor';
import Toolbar from './Toolbar/Toolbar';

const RichTextEditor = forwardRef((__, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph', 'listItem'] }),
    ],
  });

  useImperativeHandle(ref, () => ({
    getValue: () => (editor ? editor.getHTML() : ''),
  }));

  return (
    <div className="w-[720px] h-[260px] border border-gray-300 rounded-[16px] overflow-hidden">
      <Toolbar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
});

export default RichTextEditor;
