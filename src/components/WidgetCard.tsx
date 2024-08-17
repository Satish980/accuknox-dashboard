import React from "react";
import { Category, Widget } from "../types";

type Props = {
  widget: Widget;
  removeWidget: (categoryId: string, widgetId: string) => void;
  category: Category;
};

const WidgetCard: React.FC<Props> = ({ widget, removeWidget, category }) => {
  return (
    <div
      key={widget.id}
      className="relative p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col justify-between"
    >
      <button
        className="absolute top-0 right-1 text-red-500 hover:text-red-700 cursor-pointer"
        onClick={() => removeWidget(category.id, widget.id)}
      >
        ✕
      </button>
      <div>
        <h3 className="text-lg font-semibold break-words">{widget.name}</h3>
        <p className="text-gray-600 mt-2 break-words">{widget.content}</p>
      </div>
    </div>
  );
};

export default WidgetCard;
