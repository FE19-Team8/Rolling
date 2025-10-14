export default function ToggleButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-[40px] w-[122px] cursor-pointer rounded-[6px] font-['Pretendard'] text-[16px] leading-[26px] tracking-[-0.01em] ${
        active
          ? 'border-[2px] border-[#9935FF] bg-transparent font-bold text-[#861DEE]'
          : 'border-none bg-[#F4F4F5] font-normal text-[#181818]'
      }`}
    >
      {children}
    </button>
  );
}
