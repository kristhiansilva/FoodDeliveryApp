import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { API_BASE_URL } from "@/constants/api";
import { CardHorizontalFood } from "./food";

export interface FoodProps{
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const respose = await fetch(API_BASE_URL);
      const data = await respose.json();
      setFoods(data.foods);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
