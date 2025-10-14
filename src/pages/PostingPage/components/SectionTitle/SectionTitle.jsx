export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-3">
      <h3 className="text-[24px] font-bold text-gray-900">{title}</h3>
      <p className="mt-1 text-[16px] text-gray-500">{description}</p>
    </div>
  );
}
