import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  async function fetchMenu() {
    try {
      const data = await fetch(MENU_API + id);
      const json = await data.json();
      setResInfo(json?.data?.cards);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    }
  }

  return resInfo;
};

export default useRestaurantMenu;