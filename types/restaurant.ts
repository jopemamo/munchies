export type Restaurant = {
  id: string
  name: string
  rating: number
  filter_ids: string[]
  image_url: string
  delivery_time_minutes: number
  price_range_id: string
  is_open?: boolean
}

export type RestaurantsResponse = {
  restaurants: Restaurant[]
}
