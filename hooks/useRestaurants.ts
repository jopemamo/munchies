import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants, fetchOpenStatus } from '@/services/restaurantService'
import { Restaurant } from '@/types/restaurant'

export const useRestaurants = () => {
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const restaurants = await fetchRestaurants()
      const restaurantsWithStatus = await Promise.all(
        restaurants.map(async (restaurant) => ({
          ...restaurant,
          is_open: await fetchOpenStatus(restaurant.id),
        }))
      )
      return restaurantsWithStatus
    },
  })
}
