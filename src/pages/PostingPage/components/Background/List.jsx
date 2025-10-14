import Card from './Card';

export default function List({ bgType, items, selected, onSelect }) {
  return (
    <div className="gird-cols-2 mb-8 grid gap-3 md:grid-cols-4 md:gap-4">
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
