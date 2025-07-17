import { API_BASE_URL } from "@/constants/api";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantItem } from "./item";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const respose = await fetch(API_BASE_URL);
      const data = await respose.json();
      setRestaurants(data.restaurants);
    }

    getFoods();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
}
