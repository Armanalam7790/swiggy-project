import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y">
      {items.map((item) => {
        const info = item.card.info;
        const price = (info.price || info.defaultPrice) / 100;

        return (
          <div key={info.id} className="flex justify-between items-center py-4 gap-4">
            {/* Text */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{info.name}</h3>
              {info.description && (
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{info.description}</p>
              )}
              <p className="text-sm font-semibold mt-1 text-gray-700">₹{price.toFixed(2)}</p>
            </div>

            {/* Image + Add button */}
            <div className="relative flex-shrink-0">
              {info.imageId ? (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                  No Image
                </div>
              )}
              <button
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white border border-green-500 text-green-600 text-sm font-bold px-4 py-1 rounded-lg shadow hover:bg-green-50 transition whitespace-nowrap"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;