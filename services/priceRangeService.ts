export const fetchPriceRange = async (
  priceRangeId: string
): Promise<string> => {
  const response = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${priceRangeId}`
  )
  if (!response.ok) throw new Error('Failed to fetch price range')

  const data = await response.json()
  return data.range
}
