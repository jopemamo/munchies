'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WelcomePage = () => {
  useEffect(() => {
    localStorage.setItem('hasVisited', 'true')
  }, [])

  return (
    <div className="flex flex-col justify-between h-full px-6 py-10">
      <Image
        src="/MunchiesLogoWhite.svg"
        alt="Munchies Logo"
        width={167}
        height={24}
        className="mb-6 md:mb-12"
      />
      <div>
        <h1
          className="text-[48px] tracking-tight
             text-white font-bold w-[246px] h-[96px] leading-[48px] mb-4"
        >
          Treat yourself.
        </h1>
        <p className="text-white text-title w-[246px]">
          Find the best restaurants in your city and get it delivered to your
          place!
        </p>
      </div>
      <Link href="/" passHref legacyBehavior>
        <button className=" text-white px-6 py-4 border-white border-1 rounded-lg">
          Continue
        </button>
      </Link>
    </div>
  )
}

export default WelcomePage
