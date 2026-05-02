import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    // Toggle: clicking open category again closes it
    setShowIndex(showItems ? null : index);
  };

  return (
    <div className="mb-4 border rounded-lg overflow-hidden shadow-sm">
      {/* Category Header */}
      <div
        className="flex justify-between items-center bg-gray-50 px-5 py-4 cursor-pointer hover:bg-gray-100 transition"
        onClick={handleClick}
      >
        <span className="font-semibold text-gray-800 text-base">
          {data.title} ({data.itemCards.length})
        </span>
        <span className={`transition-transform duration-300 ${showItems ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* Items */}
      {showItems && (
        <div className="px-5 pb-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;