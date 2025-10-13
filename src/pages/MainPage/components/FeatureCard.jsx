export default function FeatureCard({
  point,
  title,
  description,
  width = 268,
}) {
  return (
    <div className={`flex flex-col w-[${width}px]`}>
      <span className="w-[82px]  flex justify-center items-center px-3 py-1.5 rounded-full bg-purple-600 text-white text-[14px] font-bold leading-[20px] tracking-[-0.07px] mb-4">
        Point. {point}
      </span>

      <h3 className="text-gray-900 text-[24px] font-bold leading-[36px] tracking-[-0.24px] mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-[18px] font-normal leading-[28px] tracking-[-0.18px]">
        {description}
      </p>
    </div>
  );
}
