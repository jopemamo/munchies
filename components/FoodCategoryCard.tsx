import Image from 'next/image'

interface FoodCategoryCardProps {
  name: string
  imageUrl: string
  isSelected: boolean
  onClick: () => void
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({
  name,
  imageUrl,
  isSelected,
  onClick,
}) => {
  const formattedImageUrl = imageUrl
    .replace('/images', '')
    .replace('png', 'svg')

  return (
    <button
      onClick={onClick}
      className={`flex w-[160px] h-[80px] rounded-lg border-[0.6px] border-[#0000001A] shadow-sm overflow-hidden
        ${isSelected ? 'bg-gray-200' : 'bg-white'}`}
    >
      <span className="mt-3.5 flex-1 pl-3 text-body">{name}</span>
      <div className="relative self-center w-[80px] h-[80px]">
        <Image
          src={formattedImageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </button>
  )
}

export default FoodCategoryCard
