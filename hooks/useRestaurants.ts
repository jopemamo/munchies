import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants, fetchOpenStatus } from '@/services/restaurantService'
import { fetchPriceRange } from '@/services/priceRangeService'
import { Restaurant } from '@/types/restaurant'

export const useRestaurants = () => {
  return useQuery<Restaurant[], Error>({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const restaurants = await fetchRestaurants()
      const restaurantsWithData = await Promise.all(
        restaurants.map(async (restaurant) => {
          const is_open = await fetchOpenStatus(restaurant.id)
          const price_range = await fetchPriceRange(restaurant.price_range_id)
          return { ...restaurant, is_open, price_range }
        })
      )
      const sortedRestaurants = restaurantsWithData.sort((a, b) => {
        if (a.is_open && !b.is_open) return -1
        if (!a.is_open && b.is_open) return 1
        return 0
      })

      return sortedRestaurants
    },
  })
}
