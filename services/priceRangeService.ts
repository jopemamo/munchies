const priceRangeCache = new Map<string, string>()

export const fetchPriceRange = async (
  priceRangeId: string
): Promise<string> => {
  if (priceRangeCache.has(priceRangeId)) {
    return priceRangeCache.get(priceRangeId)!
  }

  try {
    const response = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${priceRangeId}`
    )
    if (!response.ok) throw new Error('Failed to fetch price range')

    const data = await response.json()
    priceRangeCache.set(priceRangeId, data.range)

    return data.range
  } catch (error) {
    console.error('Error fetching price range:', error)
    return ''
  }
}
