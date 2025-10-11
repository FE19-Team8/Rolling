import React from 'react';
import { EditorContent } from '@tiptap/react';

function Editor({ editor }) {
  return (
    <div className="w-full h-[210px] p-4">
      <EditorContent
        editor={editor}
        className="h-[178px] w-[688px] leading-relaxed text-gray-900 bg-white whitespace-pre-wrap break-words outline-none"
      />
    </div>
  );
}

export default Editor;
