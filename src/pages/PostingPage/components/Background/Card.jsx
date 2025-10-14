import CheckOverlay from './CheckOverlay';

export default function Card({ bgType, item, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="relative h-[168px] w-[168px] cursor-pointer overflow-hidden rounded-[16px]"
    >
      <div
        className={`absolute inset-0 ${bgType === 'color' ? '' : 'bg-cover bg-center'}`}
        style={{
          backgroundColor: bgType === 'color' ? item : undefined,
          backgroundImage: bgType === 'image' ? `url(${item})` : undefined,
          opacity: bgType === 'image' && selected ? 0.3 : 1,
        }}
      />
      {selected && <CheckOverlay />}
    </button>
  );
}
