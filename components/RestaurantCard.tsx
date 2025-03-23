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
        shadow-md overflow-hidden flex flex-col justify-between p-4 fade-in"
    >
      <div className="flex items-center space-x-2">
        <RestaurantCardDetails>
          <span
            className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green' : 'bg-black'}`}
          ></span>
          <span>{isOpen ? 'Open' : 'Closed'}</span>
        </RestaurantCardDetails>
        {isOpen && (
          <RestaurantCardDetails>
            <span>{deliveryTimeMinutes} min</span>
          </RestaurantCardDetails>
        )}
      </div>

      <div
        className={`absolute -top-[32px] -right-[15px] ${isOpen ? '' : 'opacity-20'}`}
      >
        <Image
          src={formattedImageUrl}
          alt="Restaurant"
          width={140}
          height={140}
          style={{ height: '150px' }}
          className="w-auto h-auto"
          priority
        />
      </div>
      {!isOpen && (
        <div className="text-center self-center w-[170px] py-1.5 pl-2.5 pr-3 rounded-sm bg-offWhite border-[0.6px] border-[#0000001A] text-body">
          Opens tomorrow at 12 pm
        </div>
      )}
      <div
        className={`flex items-center justify-between ${isOpen ? '' : 'opacity-20'}`}
      >
        <h2 className="text-h1">{name}</h2>
        <button className="hover:opacity-80 transition-opacity">
          <Image src="/Arrow.svg" alt="Arrow" width={32} height={32} />
        </button>
      </div>
    </div>
  )
}

export default RestaurantCard
