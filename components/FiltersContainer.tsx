import FilterTag from './FilterTag'
import { FoodCategory } from '@/types/foodCategory'
import { DELIVERY_TIME_OPTIONS, PRICE_RANGE_OPTIONS } from '@/constants/filters'

interface FiltersContainerProps {
  foodCategories?: FoodCategory[]
  selectedCategories: string[]
  toggleCategory: (id: string) => void
  selectedDeliveryTimes: number[]
  toggleDeliveryTime: (time: number) => void
  selectedPriceRanges: string[]
  togglePriceRange: (range: string) => void
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  foodCategories = [],
  selectedCategories,
  toggleCategory,
  selectedDeliveryTimes,
  toggleDeliveryTime,
  selectedPriceRanges,
  togglePriceRange,
}) => {
  const topCategories = foodCategories.slice(0, 4)

  return (
    <div className="hidden md:block w-[239px] h-[85vh] bg-white p-6 border-[#0000001A] border-[0.6px] rounded-lg shadow-sm">
      <h2 className="text-h1 mb-6">Filter</h2>
      <p className="text-body opacity-40 font-semibold mb-4 uppercase">
        Food Category
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
      <div className="flex flex-wrap gap-2 mb-6">
        {DELIVERY_TIME_OPTIONS.map(({ label, value }) => (
          <FilterTag
            key={value}
            name={label}
            isSelected={selectedDeliveryTimes.includes(value)}
            onClick={() => toggleDeliveryTime(value)}
          />
        ))}
      </div>
      <p className="text-body opacity-40 font-semibold mb-4 uppercase">
        Price Range
      </p>
      <div className="flex flex-wrap gap-2">
        {PRICE_RANGE_OPTIONS.map(({ id, range }) => (
          <FilterTag
            key={id}
            name={range}
            isSelected={selectedPriceRanges.includes(range)}
            onClick={() => togglePriceRange(range)}
          />
        ))}
      </div>
    </div>
  )
}

export default FiltersContainer
