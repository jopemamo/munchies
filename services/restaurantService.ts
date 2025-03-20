import { RestaurantsResponse } from '@/types/restaurant'
import { Restaurant } from '@/types/restaurant'

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants'
  )
  if (!response.ok) throw new Error('Failed to fetch restaurants')

  const data: RestaurantsResponse = await response.json()
  return data.restaurants
}

export const fetchOpenStatus = async (
  restaurantId: string
): Promise<boolean> => {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${restaurantId}`
  )
  if (!res.ok) throw new Error('Failed to fetch open status')
  const data = await res.json()
  return data.is_open
}
