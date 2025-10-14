import React from 'react';
import ToolbarButton from './ToolbarButton';
import { COLOR_BUTTONS } from './Toolbar.constants';
import { useState, useReducer, useEffect } from 'react';

const forceUpdateReducer = (state) => state + 1;

function Palette({ editor }) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [__, forceUpdate] = useReducer(forceUpdateReducer, 0);

  const currentColor = editor ? editor.getAttributes('textStyle').color : undefined;

  useEffect(() => {
    if (!editor) return;

    editor.on('transaction', forceUpdate);

    return () => {
      editor.off('transaction', forceUpdate);
    };
  }, [editor]);

  if (!editor) return null;

  const handleColorClick = (command) => {
    command(editor);
    setIsPaletteOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <ToolbarButton
        title="텍스트 색상 선택"
        onClick={() => setIsPaletteOpen(!isPaletteOpen)}
        isActive={isPaletteOpen}
        content={
          <div className="relative flex h-full w-full items-center justify-center">
            <span>A</span>
            <div
              className="absolute right-0 bottom-0 left-0 h-[2px] w-full"
              style={{ backgroundColor: currentColor }}
            />
          </div>
        }
      />
      {isPaletteOpen && (
        <div className="absolute top-full left-0 z-20 w-[170px] rounded-md border border-gray-300 bg-white p-2 shadow-lg">
          <div className="grid grid-cols-7 gap-1">
            {COLOR_BUTTONS.map(({ title, command, content, isActiveCheck }) => {
              const isActive = editor.isActive(isActiveCheck);

              return (
                <ToolbarButton
                  key={title}
                  title={title}
                  onClick={() => handleColorClick(command)}
                  isActive={isActive}
                  content={content}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Palette;
