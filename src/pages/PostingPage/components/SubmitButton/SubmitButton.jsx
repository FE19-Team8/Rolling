export default function SubmitButton({ disabled, children, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-[56px] w-[720px] items-center justify-center rounded-[12px] text-[18px] leading-[28px] font-bold tracking-[-0.01em] text-white transition-all duration-200 ${
        !disabled
          ? 'cursor-pointer bg-[#9935FF] hover:bg-[#A259FF]'
          : 'cursor-not-allowed bg-[#E4E4E7] text-[#CCCCCC]'
      }`}
    >
      {children}
    </button>
  );
}
