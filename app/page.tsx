'use client'

import { useRestaurants } from '@/hooks/useRestaurants'
import { useFoodCategories } from '@/hooks/useFoodCategories'
import { useFoodCategoryFilters } from '@/hooks/useFoodCategoryFilters'
import RestaurantCard from '@/components/RestaurantCard'
import FoodCategoryCard from '@/components/FoodCategoryCard'
import Image from 'next/image'

export default function Home() {
  const {
    data: restaurants,
    isLoading: isLoadingRestaurants,
    error: restaurantsError,
  } = useRestaurants()

  const {
    data: foodCategories,
    isLoading: isLoadingFoodCategories,
    error: foodCategoriesError,
  } = useFoodCategories()

  const { selectedCategories, toggleCategory, filteredRestaurants } =
    useFoodCategoryFilters(restaurants)

  if (isLoadingRestaurants || isLoadingFoodCategories)
    return <div>Loading...</div>
  if (restaurantsError) return <div>Error: {restaurantsError.message}</div>
  if (foodCategoriesError)
    return <div>Error: {foodCategoriesError.message}</div>

  return (
    <>
      <Image
        src="/MunchiesLogo.svg"
        alt="Munchies Logo"
        width={167}
        height={24}
        className="md:w-[274px] md:h-[40px] mb-7 md:mb-12"
      />
      <div>
        <div className="overflow-x-auto whitespace-nowrap mb-6 scrollbar-hide">
          <div className="inline-flex gap-x-[10px]">
            {foodCategories?.map((category) => (
              <FoodCategoryCard
                key={category.id}
                name={category.name}
                imageUrl={category.image_url}
                isSelected={selectedCategories.includes(category.id)}
                onClick={() => toggleCategory(category.id)}
              />
            ))}
          </div>
        </div>
        <h1 className="text-xl md:text-[40px] mb-5 md:mb-8">Restaurants</h1>

        <ul className="flex flex-wrap gap-x-[17px] gap-y-[17px] md:gap-y-[10px]">
          {filteredRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              isOpen={restaurant.is_open || false}
              deliveryTimeMinutes={restaurant.delivery_time_minutes}
              imageUrl={restaurant.image_url}
              name={restaurant.name}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
