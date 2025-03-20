const RestaurantCardDetails = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-2 pl-2.5 pr-3 border-[#0000001A] border-[0.6px] rounded-[88px] flex items-center space-x-1 text-body">
      {children}
    </div>
  )
}

export default RestaurantCardDetails
