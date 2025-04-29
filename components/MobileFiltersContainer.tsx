import FilterTag from './FilterTag'
import { DELIVERY_TIME_OPTIONS } from '@/constants/filters'

interface MobileFiltersContainerProps {
  selectedDeliveryTimes: number[]
  toggleDeliveryTime: (time: number) => void
}

const MobileFiltersContainer: React.FC<MobileFiltersContainerProps> = ({
  selectedDeliveryTimes,
  toggleDeliveryTime,
}) => {
  return (
    <div className="md:hidden mb-6">
      <p className="text-body opacity-40 font-semibold mb-2 uppercase">
        Delivery Time
      </p>
      <div className="flex flex-wrap gap-2.5">
        {DELIVERY_TIME_OPTIONS.map(({ label, value }) => (
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

export default MobileFiltersContainer
