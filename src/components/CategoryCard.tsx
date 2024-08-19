// src/CategoryCard.tsx
import React from "react";
import { connect } from "redux-bundler-react";
import { WidgetCard } from ".";
import { Category } from "../types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  category: Category;
  openOverlay: (categoryId: string) => void;
  doRemoveWidget: (categoryId: string, widgetId: string) => void;
};

const CategoryCard: React.FC<Props> = ({
  category,
  openOverlay,
  doRemoveWidget,
}) => {
  return (
    <div key={category.id} className="space-y-2">
      <h2 className="text-1xl font-semibold">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category?.widgets?.map((widget) => {
          return widget?.isVisible ? (
            <WidgetCard
              widget={widget}
              category={category}
              removeWidget={doRemoveWidget}
              key={widget.id + widget.name}
            />
          ) : (
            <></>
          );
        })}
        <div
          className="p-4 flex justify-center items-center bg-white text-sm rounded-md border-gray-300 text-gray-500 cursor-pointer"
          onClick={() => openOverlay?.(category.id)}
        >
          <div className="flex flex-row bg-white text-gray-700 px-4 py-2 rounded justify-between gap-2 cursor-pointer border-2 border-gray-200 rounded-md">
            <div className="font-semibold">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="font-semibold">Add Widget</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect("doRemoveWidget", CategoryCard);
