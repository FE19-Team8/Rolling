export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-[48px] w-[720px]">
      <h3 className="mb-[4px] text-[24px] font-bold text-[#181818]">{title}</h3>
      <p className="mb-[32px] text-[16px] text-[#555555]">{description}</p>
    </div>
  );
}
