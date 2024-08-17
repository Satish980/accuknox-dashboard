import React from "react";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  isConfirmDisabled: boolean;
  confirmButtonText: string;
};
const ModalFooter: React.FC<Props> = ({
  onConfirm,
  onCancel,
  isConfirmDisabled = false,
  confirmButtonText = "Confirm",
}) => {
  return (
    <div className="flex mt-6 bottom-4 fixed gap-4 align-center right-6">
      <button
        onClick={onCancel}
        className="bg-transparent bg-blue-500 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded-lg"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className={`${
          !isConfirmDisabled
            ? "cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }  bg-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 rounded-lg`}
      >
        {confirmButtonText}
      </button>
    </div>
  );
};

export default ModalFooter;
