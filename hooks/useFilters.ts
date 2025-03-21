import { useState } from 'react'
import { Restaurant } from '@/types/restaurant'

export const useFilters = (restaurants?: Restaurant[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDeliveryTimes, setSelectedDeliveryTimes] = useState<number[]>(
    []
  )
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const toggleDeliveryTime = (time: number) => {
    setSelectedDeliveryTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    )
  }

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    )
  }

  const filteredRestaurants = restaurants?.filter((restaurant) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((id) => restaurant.filter_ids.includes(id))

    const matchesDeliveryTime =
      selectedDeliveryTimes.length === 0 ||
      selectedDeliveryTimes.some((time) => {
        if (time === 10) return restaurant.delivery_time_minutes <= 10
        if (time === 30)
          return (
            restaurant.delivery_time_minutes >= 10 &&
            restaurant.delivery_time_minutes <= 30
          )
        if (time === 60)
          return (
            restaurant.delivery_time_minutes >= 30 &&
            restaurant.delivery_time_minutes <= 60
          )
        return restaurant.delivery_time_minutes >= 60
      })

    const matchesPriceRange =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.includes(restaurant.price_range)

    return matchesCategory && matchesDeliveryTime && matchesPriceRange
  })

  return {
    selectedCategories,
    toggleCategory,
    selectedDeliveryTimes,
    toggleDeliveryTime,
    selectedPriceRanges,
    togglePriceRange,
    filteredRestaurants,
  }
}
