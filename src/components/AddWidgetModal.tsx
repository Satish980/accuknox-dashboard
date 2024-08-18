import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalFooter from "./ModalFooter";

type Props = {
  widgetName: string;
  setWidgetName: any;
  widgetContent: string;
  setWidgetContent: any;
  handleAddWidget: () => void;
  closeOverlay: () => void;
};

const AddWidgetModal: React.FC<Props> = ({
  widgetName,
  setWidgetName,
  widgetContent,
  setWidgetContent,
  handleAddWidget,
  closeOverlay,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-100 h-full shadow-lg transition-transform transform translate-x-0">
        <div className="flex p-3 bg-indigo-700 justify-between items-center">
          <h3 className="font-semibold text-white">Add Widget</h3>
          <div className="cursor-pointer text-lg" onClick={closeOverlay}>
            <FontAwesomeIcon icon={faClose} className="text-white" />
          </div>
        </div>
        {/* body */}
        <div className="p-6">
          <input
            type="text"
            className="border p-2 rounded mb-4 w-full"
            placeholder="Enter Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
          <textarea
            className="border p-2 rounded mb-4 w-full"
            placeholder="Enter Widget Content"
            value={widgetContent}
            onChange={(e) => setWidgetContent(e.target.value)}
            required
          />
          <ModalFooter
            onCancel={closeOverlay}
            onConfirm={handleAddWidget}
            isConfirmDisabled={!(widgetName && widgetContent)}
            confirmButtonText={'Add'}
          />
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
