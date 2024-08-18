import React from "react";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  isConfirmDisabled?: boolean;
  confirmButtonText?: string;
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
        className="bg-transparent bg-white-500 text-indigo-700 font-semibold py-2 px-4 border border-indigo-500 rounded-md"
      >
        Cancel
      </button>
      <button
        onClick={onConfirm}
        className={`${
          !isConfirmDisabled
            ? "cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }  bg-indigo-700 font-semibold text-white py-2 px-4 border border-indigo-500 rounded-md`}
      >
        {confirmButtonText}
      </button>
    </div>
  );
};

export default ModalFooter;
