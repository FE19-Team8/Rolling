import Card from './Card';

export default function List({ bgType, items, selected, onSelect }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-3 md:mb-38 md:grid-cols-4 md:gap-4">
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
