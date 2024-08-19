// src/Dashboard.tsx
import React, { useState } from "react";
import { connect } from "redux-bundler-react";
import {
  AddWidgetModal,
  CategoryCard,
  Header,
  WidgetModal,
} from "..";
import { Category } from "../../types";

type Props = {
  categories: Category[];
  doAddWidget: (
    categoryId: string,
    widget: { name: string; content: string }
  ) => void;
  doFetchCategories: () => void;
};

const Dashboard: React.FC<Props> = ({
  categories,
  doAddWidget,
  doFetchCategories,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [widgetName, setWidgetName] = useState<string>("");
  const [widgetContent, setWidgetContent] = useState<string>("");

  // Fetching categories on component mount
  React.useEffect(() => {
    doFetchCategories();
  }, [doFetchCategories]);

  const handleAddWidget = () => {
    if (selectedCategoryId && widgetName.trim() && widgetContent.trim()) {
      doAddWidget(selectedCategoryId, {
        name: widgetName,
        content: widgetContent,
      });
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
      <div className="px-8 space-y-8 min-h-screen">
        {categories?.map((category: Category, index: number) => (
          <CategoryCard
            category={category}
            openOverlay={openOverlay}
            key={category.id + index}
          />
        ))}
      </div>
      {/* Side Overlay for Adding Widgets */}
      {isOverlayOpen && (
        <AddWidgetModal
          widgetName={widgetName}
          widgetContent={widgetContent}
          setWidgetName={setWidgetName}
          setWidgetContent={setWidgetContent}
          handleAddWidget={handleAddWidget}
          isOverlayOpen={isOverlayOpen}
          closeOverlay={closeOverlay}
        />
      )}
      <WidgetModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default connect(
  "selectCategories",
  "doAddWidget",
  "doFetchCategories",
  Dashboard
);
