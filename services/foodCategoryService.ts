import { FoodCategoriesResponse, FoodCategory } from '@/types/foodCategory'

export const fetchFoodCategories = async (): Promise<FoodCategory[]> => {
  const response = await fetch(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter'
  )
  if (!response.ok) throw new Error('Failed to fetch food categories')

  const data: FoodCategoriesResponse = await response.json()
  return data.filters
}
