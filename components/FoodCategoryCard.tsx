import Image from 'next/image'

interface FoodCategoryCardProps {
  name: string
  imageUrl: string
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({
  name,
  imageUrl,
}) => {
  const formattedImageUrl = imageUrl
    .replace('/images', '')
    .replace('png', 'svg')
  return (
    <div className="flex w-[160px] h-[80px] bg-white rounded-lg border-[0.6px] border-[#0000001A] shadow-md overflow-hidden">
      <span className="mt-3.5 flex-1 pl-3 text-body">{name}</span>
      <div className="relative self-center w-[80px] h-[80px]">
        <Image
          src={formattedImageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default FoodCategoryCard
