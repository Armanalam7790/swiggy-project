import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  // Extract restaurant info
  const info = resInfo?.map((c) => c?.card?.card?.info)?.find(Boolean);

  const name = info?.name;
  const cuisines = info?.cuisines || [];
  const avgRating = info?.avgRating;
  const costForTwoMessage = info?.costForTwoMessage;
  const deliveryTime = info?.sla?.deliveryTime;
  const cloudinaryImageId = info?.cloudinaryImageId;

  // Extract menu categories
  const groupedCard = resInfo.find((c) => c?.groupedCard);
  const categories =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="flex gap-6 items-center bg-white shadow-md rounded-xl p-6 mb-8">
        {cloudinaryImageId && (
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-40 h-32 object-cover rounded-lg flex-shrink-0"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-500 mt-1">{cuisines.join(", ")}</p>
          <p className="text-sm mt-2 text-gray-600">
            ⭐ {avgRating} &nbsp;•&nbsp; {deliveryTime} mins &nbsp;•&nbsp; {costForTwoMessage}
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div>
        {categories.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No menu items found.</p>
        ) : (
          categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title + index}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={setShowIndex}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;