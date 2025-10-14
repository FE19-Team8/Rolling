import ToggleButton from './ToggleButton';

export default function ToggleGroup({ bgType, setBgType, setBgValue, bgColors, bgImages, labels }) {
  return (
    <div className="mb-[32px] flex h-[40px] w-[244px]">
      {['color', 'image'].map((type) => (
        <ToggleButton
          key={type}
          active={bgType === type}
          onClick={() => {
            setBgType(type);
            if (type === 'color') setBgValue(bgColors[0]);
            if (type === 'image' && bgImages.length > 0) setBgValue(bgImages[0]);
          }}
        >
          {labels[type]}
        </ToggleButton>
      ))}
    </div>
  );
}
