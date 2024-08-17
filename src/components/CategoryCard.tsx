// Contains category name and List of widgets present in that category
import React from "react";
import { WidgetCard } from ".";
import useDashboardStore from "../store";
import { Category } from "../types";

type Props = {
  category: Category;
  openOverlay: (categoryId: string) => void;
};
const CategoryCard: React.FC<Props> = ({ category, openOverlay }) => {
  const removeWidget = useDashboardStore(
    (state) => state.removeWidgetFromCategory
  );
  return (
    <div key={category.id} className="space-y-6">
      <h2 className="text-1xl font-semibold">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category?.widgets?.map((widget) => (
          <WidgetCard
            widget={widget}
            category={category}
            removeWidget={removeWidget}
            key={widget.id + widget.name}
          />
        ))}
        <div
          className="p-4 flex justify-center items-center bg-white rounded-lg border-dashed border-2 border-gray-300 text-gray-500 hover:bg-gray-100 cursor-pointer"
          onClick={() => openOverlay?.(category.id)}
        >
          + Add Widget
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
