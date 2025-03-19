import { RestaurantsResponse } from '@/types/restaurant';

export const fetchRestaurants = async () => {
  const response = await fetch('https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants');
  if (!response.ok) throw new Error('Failed to fetch restaurants');

  const data: RestaurantsResponse = await response.json();
  return data.restaurants;
};