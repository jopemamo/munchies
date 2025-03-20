import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants } from '@/services/restaurantService'
import { Restaurant } from '@/types/restaurant'

export const useRestaurants = () => {
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  })
}
