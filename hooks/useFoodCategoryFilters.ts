import { useState } from 'react'
import { Restaurant } from '@/types/restaurant'

export const useFoodCategoryFilters = (restaurants?: Restaurant[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const filteredRestaurants =
    selectedCategories.length === 0
      ? restaurants
      : restaurants?.filter((restaurant) =>
          selectedCategories.some((id) => restaurant.filter_ids.includes(id))
        )

  return { selectedCategories, toggleCategory, filteredRestaurants }
}
