import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData.info;

  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100">
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-bold text-lg truncate">{name}</h3>

        <p className="text-gray-500 text-sm truncate">
          {cuisines?.join(", ")}
        </p>

        <div className="flex justify-between mt-2 text-sm font-semibold">
          <span className="bg-green-600 text-white px-2 py-[2px] rounded">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600">{sla?.deliveryTime} mins</span>
          <span className="text-gray-600">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;