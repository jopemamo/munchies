'use client'

import { useRestaurants } from '@/hooks/useRestaurants'
import RestaurantCard from '@/components/RestaurantCard'
import Image from 'next/image'

export default function Home() {
  const { data: restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  console.log(restaurants)
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
        <h1 className="text-xl md:text-[40px] mb-5 md:mb-8">Restaurant's</h1>
        <ul className="flex flex-wrap gap-x-[17px] gap-y-[17px] md:gap-y-[10px]">
          {restaurants?.map((restaurant) => (
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
