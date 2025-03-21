import FoodCategoryTag from './FoodCategoryTag'
import { FoodCategory } from '@/types/foodCategory'

interface FiltersContainerProps {
  foodCategories: FoodCategory[]
  selectedCategories: string[]
  toggleCategory: (id: string) => void
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({
  foodCategories,
  selectedCategories,
  toggleCategory,
}) => {
  const topCategories = foodCategories.slice(0, 4)

  return (
    <div className="hidden md:block w-[239px] bg-white p-6 border-[#0000001A] border-[0.6px] rounded-lg shadow-sm">
      <h2 className="text-h1 mb-6">Filter</h2>
      <p className="text-body opacity-40 font-semibold mb-4 uppercase">
        food category
      </p>
      <div className="flex flex-col gap-2">
        {topCategories.map((category) => (
          <FoodCategoryTag
            key={category.id}
            name={category.name}
            isSelected={selectedCategories.includes(category.id)}
            onClick={() => toggleCategory(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default FiltersContainer
