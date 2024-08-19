import React, { useState, useEffect } from "react";
import { connect } from "redux-bundler-react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalFooter from "./ModalFooter";
import { Category } from "../types";

interface WidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  doUpdateCategoryWidgets: (categories: Category[]) => void; // Action to update widgets on confirm
}

const WidgetModal: React.FC<WidgetModalProps> = ({
  isOpen,
  onClose,
  categories,
  doUpdateCategoryWidgets,
}) => {
  const [selectedTab, setSelectedTab] = useState("cspm_executive_dashboard");
  const [localCategories, setLocalCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories.length) {
      setLocalCategories(categories);
    }
  }, [categories]);

  // Closing modal on 'Esc' key press
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentCategory = localCategories.find((cat) => cat.id === selectedTab);

  const toggleWidgetVisibility = (categoryId: string, widgetId: string) => {
    setLocalCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.map((widget) =>
                widget.id === widgetId
                  ? { ...widget, isVisible: !widget.isVisible }
                  : widget
              ),
            }
          : category
      )
    );
  };

  const handleConfirm = () => {
    doUpdateCategoryWidgets(localCategories); // Apply the widget updates for all categories
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
            {localCategories.map((category, index) => (
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
                      toggleWidgetVisibility(currentCategory.id, widget.id)
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
  "doUpdateCategoryWidgets",
  WidgetModal
);
