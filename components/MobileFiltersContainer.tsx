import FilterTag from './FilterTag'

interface MobileFiltersContainerProps {
  selectedDeliveryTimes: number[]
  toggleDeliveryTime: (time: number) => void
}

const deliveryTimeOptions = [
  { label: '0-10 min', value: 10 },
  { label: '10-30 min', value: 30 },
  { label: '30-60 min', value: 60 },
  { label: '1hour+', value: 61 },
]

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

export default MobileFiltersContainer
