import React from 'react';

function Toolbar({ editor }) {
  if (!editor) return null;

  return (
    <div className="w-full h-[50px] flex items-center px-[15px] py-[13px] bg-gray-200">
      {/* 텍스트 스타일 B / I / U 그룹 */}
      <div className="flex items-center w-[76px] h-[24px] justify-between"></div>
      {/* Bold 버튼 */}
      <button
        onClick={editor.chain().focus().toggleBold().run()}
        className="w-[24px] h-[24px] flex items-center justify-center hover:text-purple-600"
      >
        <span className="font-bold">B</span>
      </button>
    </div>
  );
}

export default Toolbar;
