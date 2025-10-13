import React from 'react';
import { EditorContent } from '@tiptap/react';

function Editor({ editor }) {
  const handleWrapperClick = () => {
    editor.commands.focus();
  };

  return (
    <div className="h-[210px] w-full p-4" onClick={handleWrapperClick}>
      <EditorContent
        editor={editor}
        className="h-[178px] w-[688px] bg-white leading-relaxed break-words whitespace-pre-wrap text-gray-900 outline-none"
      />
    </div>
  );
}

export default Editor;
