import Card from './Card';

export default function List({ bgType, items, selected, onSelect }) {
  return (
    <div className="mb-[48px] flex gap-[16px]">
      {items.map((item, idx) => (
        <Card
          key={idx}
          bgType={bgType}
          item={item}
          selected={selected === item}
          onSelect={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
