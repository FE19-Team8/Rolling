export default function ToInput({ label, value, onChange, onBlur, placeholder, error }) {
  return (
    <div className="mb-[48px] w-[720px]">
      <h2 className="mb-[12px] text-[20px] font-bold text-[#181818]">{label}</h2>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[48px] w-full rounded-[8px] border px-[12px] text-[16px] leading-[24px] placeholder:text-[#A1A1AA] focus:outline-none ${
          error ? 'border-[#DC3A3A]' : 'border-[#E4E4E7] focus:border-[#9935FF]'
        }`}
      />
      {error && <p className="mt-[8px] text-[14px] text-[#DC3A3A]">{error}</p>}
    </div>
  );
}
