import React from 'react';

function FormItem({ title, children }) {
  return (
    <div title={title} className="flex flex-col">
      <span className="mb-[12px] text-[24px] font-bold">{title}</span>
      {children}
    </div>
  );
}

export default FormItem;
