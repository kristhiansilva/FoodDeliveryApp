import { API_BASE_URL } from "@/constants/api";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { RestaurantsItem } from "./horizontal";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
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
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
