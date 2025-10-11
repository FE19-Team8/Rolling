import clsx from 'clsx';
import React from 'react';

function ToolbarButton({ title, onClick, isActive, content }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={clsx(
        'w-6 h-6 flex items-center justify-center transition rounded hover:bg-gray-300',
        isActive && 'text-purple-600',
      )}
    >
      {content}
    </button>
  );
}
0;

export default ToolbarButton;
