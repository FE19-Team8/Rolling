import clsx from "clsx";

const BASE_CLASSES = [
  "flex",
  "flex-row",
  "items-start",
  "w-fit",
  "py-2",
  "px-3",
  "rounded-[32px]",
  "bg-black/[.54]",
  "text-white",
  "text-[16px]",
  "leading-5",
  "font-normal",
];

const DEFAULT_EMOJI = "🙂";

const EmojiBadge = ({ emoji = DEFAULT_EMOJI, count = 0 }) => {
  const displayCount = count > 99 ? "99+" : count;

  return (
    <div className={clsx(BASE_CLASSES)}>
      <span>{emoji}</span>
      <span>{displayCount}</span>
    </div>
  );
};

export default EmojiBadge;
