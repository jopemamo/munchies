'use client'

import { useRestaurants } from '@/hooks/useRestaurants'
import Image from 'next/image'

export default function Home() {
  const { data: restaurants, isLoading, error } = useRestaurants()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Image
        src="/MunchiesLogo.svg"
        alt="Munchies Logo"
        width={167}
        height={24}
        className="md:w-[274px] md:h-[40px]"
      />
      <div>
        <h1>{"Restaurant's"}</h1>
        <ul>
          {restaurants?.map((restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
