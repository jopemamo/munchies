import { useQuery } from '@tanstack/react-query';
import { fetchRestaurants } from '@/services/restaurantService';

export const useRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
};