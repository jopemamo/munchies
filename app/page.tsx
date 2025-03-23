'use client'

import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useRestaurants } from '@/hooks/useRestaurants'
import { useFoodCategories } from '@/hooks/useFoodCategories'
import { useFilters } from '@/hooks/useFilters'
import RestaurantCard from '@/components/RestaurantCard'
import FoodCategoryCard from '@/components/FoodCategoryCard'
import FiltersContainer from '@/components/FiltersContainer'
import Image from 'next/image'
import MobileFiltersContainer from '@/components/MobileFiltersContainer'
import Loading from './loading'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const hasVisited = localStorage.getItem('hasVisited')

    if (isMobile && !hasVisited) {
      setShowWelcome(true)
    }
  }, [])

  if (showWelcome) {
    redirect('/welcome')
  }

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

  const {
    selectedCategories,
    toggleCategory,
    selectedDeliveryTimes,
    selectedPriceRanges,
    toggleDeliveryTime,
    togglePriceRange,
    filteredRestaurants,
  } = useFilters(restaurants)

  if (isLoadingRestaurants || isLoadingFoodCategories) return <Loading />

  if (restaurantsError || foodCategoriesError)
    return (
      <div className="text-center py-10 text-red-600">
        {restaurantsError ? `Error: ${restaurantsError.message}` : ''}
        {foodCategoriesError ? `Error: ${foodCategoriesError.message}` : ''}
      </div>
    )

  return (
    <>
      <Image
        src="/MunchiesLogo.svg"
        alt="Munchies Logo"
        width={167}
        height={24}
        className="md:w-[274px] md:h-[40px] mb-6 md:mb-12"
      />
      <div className="md:flex gap-5">
        <FiltersContainer
          foodCategories={foodCategories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          selectedDeliveryTimes={selectedDeliveryTimes}
          toggleDeliveryTime={toggleDeliveryTime}
          selectedPriceRanges={selectedPriceRanges}
          togglePriceRange={togglePriceRange}
        />

        <div className="flex-1 min-w-0">
          <MobileFiltersContainer
            selectedDeliveryTimes={selectedDeliveryTimes}
            toggleDeliveryTime={toggleDeliveryTime}
          />
          <div className="overflow-x-auto whitespace-nowrap mb-6 scrollbar-hide">
            <div className="inline-flex gap-x-[10px] pb-1">
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
          <h1 className="text-xl md:text-display mb-5 md:mb-8">Restaurants</h1>

          {(filteredRestaurants ?? []).length < 1 ? (
            <h1>No restaurants found. Try adjusting your filters!</h1>
          ) : (
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
          )}
        </div>
      </div>
    </>
  )
}
