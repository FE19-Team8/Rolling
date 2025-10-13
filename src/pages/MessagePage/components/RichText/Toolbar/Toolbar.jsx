import React from 'react';
import ToolbarButtonGroup from './ToolbarButtonGroup';
import {
  TEXT_ALIGN_BUTTONS,
  TEXT_STYLE_BUTTONS,
  LIST_BUTTONS,
} from './Toolbar.constants';
import Palette from './Palette';

function Toolbar({ editor }) {
  return (
    <div className="w-full h-[50px] flex items-center px-[15px] py-[13px] bg-gray-200">
      <div className="flex items-center gap-[14px]">
        <ToolbarButtonGroup editor={editor} buttons={TEXT_STYLE_BUTTONS} />
        <ToolbarButtonGroup editor={editor} buttons={TEXT_ALIGN_BUTTONS} />
        <ToolbarButtonGroup editor={editor} buttons={LIST_BUTTONS} />
        <Palette editor={editor} />
      </div>
    </div>
  );
}

export default Toolbar;
