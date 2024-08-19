// src/WidgetModal.tsx
import React, { useState } from "react";
import { connect } from "redux-bundler-react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalFooter from "./ModalFooter";
import { Category } from "../types";

interface WidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  doToggleWidgetVisibility: (categoryId: string, widgetId: string) => void;
  updateCategoryWidgets: (categoryId: string) => void; // Action to update widgets on confirm
}

const WidgetModal: React.FC<WidgetModalProps> = ({
  isOpen,
  onClose,
  categories,
  doToggleWidgetVisibility,
  updateCategoryWidgets,
}) => {
  const [selectedTab, setSelectedTab] = useState("cspm_executive_dashboard");

  if (!isOpen) return null;

  const currentCategory = categories.find((cat) => cat.id === selectedTab);

  const handleConfirm = () => {
    if (currentCategory) {
      updateCategoryWidgets(currentCategory.id); // Apply the widget updates for the selected category
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-100 h-full shadow-lg transition-transform transform translate-x-0">
        <div className="flex p-3 bg-indigo-700 justify-between items-center">
          <h3 className="font-semibold text-white">Add Widget</h3>
          <div className="cursor-pointer text-lg" onClick={onClose}>
            <FontAwesomeIcon icon={faClose} className="text-white" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">
              Personalise your dashboard by adding the following widgets
            </h3>
          </div>

          <div className="flex space-x-2 mb-4">
            {categories.map((category, index) => (
              <button
                key={category.id + index}
                className={`py-2 px-4 rounded-t-lg font-semibold ${
                  selectedTab === category.id
                    ? "text-indigo-700 border-b-2 border-b-indigo-700"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedTab(category.id)}
              >
                {category.keyName}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {currentCategory?.widgets.map((widget) => (
              <div key={widget.id} className="p-2 border-2 rounded">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={widget.isVisible}
                    onChange={() =>
                      doToggleWidgetVisibility(currentCategory.id, widget.id)
                    }
                    className="accent-indigo-700"
                  />
                  <span>{widget.name}</span>
                </label>
              </div>
            ))}
          </div>

          <ModalFooter onCancel={onClose} onConfirm={handleConfirm} />
        </div>
      </div>
    </div>
  );
};

export default connect(
  "selectCategories",
  "doToggleWidgetVisibility",
  "doUpdateCategoryWidgets", // New action for confirming widget updates
  WidgetModal
);
