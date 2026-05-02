import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6291344&lng=77.12047129999999"
      );
      const json = await res.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
    }
  }

  const handleSearch = () => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurant.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurant(filtered);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurant(listOfRestaurant);
  };

  if (listOfRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center mb-8">
        {/* Search */}
        <div className="flex w-full max-w-xl bg-white border rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="flex-1 px-5 py-3 outline-none text-gray-700"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Top Rated */}
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          onClick={handleTopRated}
        >
          Top Rated ⭐
        </button>

        {/* Reset */}
        <button
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* No results */}
      {filteredRestaurant.length === 0 && (
        <div className="text-center py-20 text-gray-500 text-lg">
          No restaurants found. Try a different search.
        </div>
      )}

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;