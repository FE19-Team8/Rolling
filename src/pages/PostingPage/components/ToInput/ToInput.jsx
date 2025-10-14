export default function ToInput({ label, value, onChange, onBlur, placeholder, error }) {
  return (
    <div className="mb-6 w-[328px] w-[720px]">
      <h2 className="mb-2 text-[24px] leading-[36px] font-bold text-gray-900">{label}</h2>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[50px] w-full rounded-[8px] border border-gray-300 px-4 text-[16px] leading-[26px] placeholder:text-gray-500 focus:outline-none ${
          error ? 'border-[#DC3A3A]' : 'border-[#E4E4E7] focus:border-[#9935FF]'
        }`}
      />
      {error && <p className="mt-2 text-sm text-[#DC3A3A]">{error}</p>}
    </div>
  );
}
