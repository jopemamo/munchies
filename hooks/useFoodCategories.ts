import { useQuery } from '@tanstack/react-query'
import { fetchFoodCategories } from '@/services/foodCategoryService'
import { FoodCategory } from '@/types/foodCategory'

export const useFoodCategories = () => {
  return useQuery<FoodCategory[], Error>({
    queryKey: ['foodCategories'],
    queryFn: fetchFoodCategories,
  })
}
