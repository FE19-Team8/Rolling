import clsx from 'clsx';
import React from 'react';

function ToolbarButton({ title, onClick, isActive, content }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={clsx(
        'flex h-6 w-6 items-center justify-center rounded transition hover:bg-gray-300',
        isActive && 'text-purple-600'
      )}
    >
      {content}
    </button>
  );
}
0;

export default ToolbarButton;
