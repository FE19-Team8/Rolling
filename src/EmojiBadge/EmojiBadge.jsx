const BASE_CLASSES = [
  "rounded-full",
  "w-16",
  "h-9",
  "px-3",
  "py-2",
  "bg-black/[.54]",
  "text-white",
  "text-base/5",
];

const DEFAULT_EMOJI = "🙂";

const EmojiBadge = ({ emoji = DEFAULT_EMOJI, count = 0 }) => {
  return (
    <div className={BASE_CLASSES.join(" ")}>
      {emoji} {count}
    </div>
  );
};

export default EmojiBadge;
