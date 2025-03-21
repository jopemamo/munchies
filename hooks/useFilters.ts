import { useState } from 'react'
import { Restaurant } from '@/types/restaurant'

export const useFilters = (restaurants?: Restaurant[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDeliveryTimes, setSelectedDeliveryTimes] = useState<number[]>(
    []
  )

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

  const filterByDeliveryTime = (restaurant: Restaurant) => {
    if (selectedDeliveryTimes.length === 0) return true

    const deliveryTime = restaurant.delivery_time_minutes
    return selectedDeliveryTimes.some((time) => {
      if (time === 10) return deliveryTime <= 10
      if (time === 30) return deliveryTime >= 10 && deliveryTime <= 30
      if (time === 60) return deliveryTime >= 30 && deliveryTime <= 60
      return deliveryTime >= 60
    })
  }

  const filteredRestaurants = restaurants?.filter(
    (restaurant) =>
      (selectedCategories.length === 0 ||
        selectedCategories.some((id) => restaurant.filter_ids.includes(id))) &&
      filterByDeliveryTime(restaurant)
  )

  return {
    selectedCategories,
    toggleCategory,
    selectedDeliveryTimes,
    toggleDeliveryTime,
    filteredRestaurants,
  }
}
