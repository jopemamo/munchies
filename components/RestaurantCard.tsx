import Image from 'next/image'
import RestaurantCardDetails from './RestaurantCardDetails'

interface RestaurantCardProps {
  isOpen: boolean
  deliveryTimeMinutes: number
  imageUrl: string
  name: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  isOpen,
  deliveryTimeMinutes,
  imageUrl,
  name,
}) => {
  const formattedImageUrl = imageUrl
    .replace('/images', '')
    .replace('png', 'svg')

  return (
    <div
      className="relative w-[327px] h-[202px] bg-white rounded-lg border-[0.6px] border-[#0000001A]
        shadow-md overflow-hidden flex flex-col justify-between p-4"
    >
      <div className="flex items-center space-x-2">
        <RestaurantCardDetails>
          <span
            className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green' : 'bg-black'}`}
          ></span>
          <span>{isOpen ? 'Open' : 'Closed'}</span>
        </RestaurantCardDetails>
        <RestaurantCardDetails>
          <span>{deliveryTimeMinutes} min</span>
        </RestaurantCardDetails>
      </div>

      <div className="absolute -top-[34px] -right-[16px] w-[140px] h-[140px]">
        <Image
          src={formattedImageUrl}
          alt="Restaurant"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-h1">{name}</h2>
        <button className="hover:opacity-80 transition-opacity">
          <Image src="/Arrow.svg" alt="Arrow" width={32} height={32} />
        </button>
      </div>
    </div>
  )
}

export default RestaurantCard
