const ModalWrapper = ({ children, onClose }) => {
  const baseStyle = 'fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex items-center justify-center';
  const modalStyle =
    'relative bg-white rounded-2xl shadow-lg p-6 w-100 md:w-150 h-[476px] overflow-y-auto';

  return (
    <div className={baseStyle} onClick={onClose}>
      <div className={modalStyle} onClick={(err) => err.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
