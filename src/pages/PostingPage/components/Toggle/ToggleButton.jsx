export default function ToggleButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-[40px] min-w-[90px] cursor-pointer rounded-[6px] px-3 font-['Pretendard'] text-[16px] leading-[26px] tracking-[-0.01em] md:min-w-[122px] md:px-4 ${
        active
          ? 'border-2 border-purple-600 bg-transparent font-bold text-purple-700'
          : 'border-none border-gray-300 bg-[#F4F4F5] font-normal text-gray-500'
      }`}
    >
      {children}
    </button>
  );
}
