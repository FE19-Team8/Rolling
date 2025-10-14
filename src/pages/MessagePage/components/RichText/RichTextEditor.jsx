import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { useRef } from 'react';

import Editor from './Editor';
import Toolbar from './Toolbar/Toolbar';

const extensions = [
  StarterKit,
  TextStyle,
  Color,
  TextAlign.configure({ types: ['heading', 'paragraph', 'listItem'] }),
];

function RichTextEditor({ onChange }) {
  const prevRef = useRef('');
  const editor = useEditor(
    {
      extensions,
      onUpdate: ({ editor }) => {
        const newHTML = editor.getHTML();
        if (newHTML !== prevRef.current) {
          prevRef.current = newHTML; // ✅ 새 값으로 업데이트
          onChange?.(newHTML);
        }
      },
    },
    []
  );

  return (
    <div className="custom-scrollbar h-[260px] w-[320px] overflow-hidden overflow-y-auto rounded-[16px] border border-gray-300 md:w-[720px]">
      <Toolbar editor={editor} />
      <Editor editor={editor} />
    </div>
  );
}

export default RichTextEditor;
