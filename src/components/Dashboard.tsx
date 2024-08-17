// src/Dashboard.tsx
import React, { useState } from "react";
import useDashboardStore from "../store";
import {
  AddWidgetModal,
  CategoryCard,
  Header,
  WidgetModal,
} from "../components";

const Dashboard: React.FC = () => {
  const categories = useDashboardStore((state) => state.categories);
  const addWidget = useDashboardStore((state) => state.addWidgetToCategory);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [widgetName, setWidgetName] = useState<string>("");
  const [widgetContent, setWidgetContent] = useState<string>("");

  const handleAddWidget = () => {
    if (selectedCategoryId) {
      addWidget(selectedCategoryId, widgetName, widgetContent);
      closeOverlay();
    }
  };

  const openOverlay = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setWidgetName("");
    setWidgetContent("");
  };

  const handleAddCategoryClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onAddCategoryClick={handleAddCategoryClick} />
      <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
        {categories?.map((category) => (
          <CategoryCard
            category={category}
            openOverlay={openOverlay}
            key={category.id + category.name}
          />
        ))}

        {/* Side Overlay for Adding Widgets */}
        {isOverlayOpen && (
          <AddWidgetModal
            widgetName={widgetName}
            widgetContent={widgetContent}
            setWidgetName={setWidgetName}
            setWidgetContent={setWidgetContent}
            handleAddWidget={handleAddWidget}
            closeOverlay={closeOverlay}
          />
        )}
      </div>
      <WidgetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default Dashboard;
