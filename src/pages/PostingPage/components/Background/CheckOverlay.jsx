import checkIcon from '../../../../assets/icons/ic_check.svg';

export default function CheckOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#555555]">
        <img src={checkIcon} alt="선택됨" draggable={false} className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
}
