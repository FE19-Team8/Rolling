import React from 'react';
import ToolbarButton from './ToolbarButton';
import { useEffect } from 'react';
import { useReducer } from 'react';

const forceUpdateReducer = (state) => state + 1;

function ToolbarButtonGroup({ editor, buttons }) {
  const [__, forceUpdate] = useReducer(forceUpdateReducer, 0);

  useEffect(() => {
    if (!editor) return;
    editor.on('transaction', forceUpdate);

    return () => {
      editor.off('transaction', forceUpdate);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={`flex items-center gap-1 h-6 justify-between`}>
      {buttons.map(({ title, command, isActiveCheck, content }) => (
        <ToolbarButton
          key={title}
          title={title}
          onClick={() => command(editor)}
          isActive={editor.isActive(isActiveCheck)}
          content={content}
        />
      ))}
    </div>
  );
}

export default ToolbarButtonGroup;
