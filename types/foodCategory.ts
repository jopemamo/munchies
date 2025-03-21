export interface FoodCategory {
  id: string
  name: string
  image_url: string
}

export interface FoodCategoriesResponse {
  filters: FoodCategory[]
}
