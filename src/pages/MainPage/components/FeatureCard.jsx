export default function FeatureCard({ point, title, description, width = 268, className }) {
  return (
    <div className={`flex flex-col w-[${width}px] ${className}`}>
      <span className="mb-4 flex w-[82px] items-center justify-center rounded-full bg-purple-600 px-3 py-1.5 text-[14px] leading-[20px] font-bold tracking-[-0.07px] text-white">
        Point. {point}
      </span>

      <h3 className="mb-2 text-[24px] leading-[36px] font-bold tracking-[-0.24px] text-gray-900">
        {title}
      </h3>

      <p className="text-[18px] leading-[28px] font-normal tracking-[-0.18px] text-gray-500">
        {description}
      </p>
    </div>
  );
}
