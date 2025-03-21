interface FilterTagProps {
  name: string
  isSelected: boolean
  onClick: () => void
}

const FilterTag: React.FC<FilterTagProps> = ({ name, isSelected, onClick }) => {
  return (
    <button
      className={`py-2 px-3 w-fit border-[#0000001A] border-[0.6px] rounded-lg text-body transition ${
        isSelected ? 'bg-gray-200' : 'bg-white border-gray-300'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default FilterTag
