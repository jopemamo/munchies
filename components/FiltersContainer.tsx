import FilterTag from './FilterTag'
import { FoodCategory } from '@/types/foodCategory'

interface FiltersContainerProps {
  foodCategories?: FoodCategory[]
  selectedCategories: string[]
  toggleCategory: (id: string) => void
  selectedDeliveryTimes: number[]
  toggleDeliveryTime: (time: number) => void
}

const deliveryTimeOptions = [
  { label: '0-10 min', value: 10 },
  { label: '10-30 min', value: 30 },
  { label: '30-60 min', value: 60 },
  { label: '1hour+', value: 61 },
]

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  foodCategories = [],
  selectedCategories,
  toggleCategory,
  selectedDeliveryTimes,
  toggleDeliveryTime,
}) => {
  const topCategories = foodCategories.slice(0, 4)

  return (
    <div className="hidden md:block w-[239px] bg-white p-6 border-[#0000001A] border-[0.6px] rounded-lg shadow-sm">
      <h2 className="text-h1 mb-6">Filter</h2>
      <p className="text-body opacity-40 font-semibold mb-4 uppercase">
        food category
      </p>
      <div className="flex flex-col gap-2 mb-6">
        {topCategories.map((category) => (
          <FilterTag
            key={category.id}
            name={category.name}
            isSelected={selectedCategories.includes(category.id)}
            onClick={() => toggleCategory(category.id)}
          />
        ))}
      </div>

      <p className="text-body opacity-40 font-semibold mb-4 uppercase">
        Delivery Time
      </p>
      <div className="flex flex-wrap gap-2">
        {deliveryTimeOptions.map(({ label, value }) => (
          <FilterTag
            key={value}
            name={label}
            isSelected={selectedDeliveryTimes.includes(value)}
            onClick={() => toggleDeliveryTime(value)}
          />
        ))}
      </div>
    </div>
  )
}

export default FiltersContainer
