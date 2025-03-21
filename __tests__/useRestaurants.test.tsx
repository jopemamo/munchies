import { renderHook, waitFor } from '@testing-library/react'
import { useRestaurants } from '@/hooks/useRestaurants'
import { fetchRestaurants, fetchOpenStatus } from '@/services/restaurantService'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Restaurant } from '@/types/restaurant'

jest.mock('@/services/restaurantService')

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Test Restaurant',
    rating: 4.5,
    filter_ids: ['123'],
    image_url: '/images/test.png',
    delivery_time_minutes: 30,
    price_range_id: 'abc',
    is_open: true,
    price_range: '',
  },
]

const queryClient = new QueryClient()

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

test('fetches and returns restaurant data with open status', async () => {
  ;(fetchRestaurants as jest.Mock<Promise<Restaurant[]>>).mockResolvedValue(
    mockRestaurants
  )
  ;(fetchOpenStatus as jest.Mock<Promise<boolean>>).mockResolvedValue(true)

  const { result } = renderHook(() => useRestaurants(), { wrapper })

  await waitFor(() => {
    expect(result.current.data).toEqual([
      {
        id: '1',
        name: 'Test Restaurant',
        rating: 4.5,
        filter_ids: ['123'],
        image_url: '/images/test.png',
        delivery_time_minutes: 30,
        price_range_id: 'abc',
        is_open: true,
        price_range: '',
      },
    ])
  })
})
