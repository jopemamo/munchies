import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'
import RestaurantCard from '@/components/RestaurantCard'
import { useRestaurants } from '@/hooks/useRestaurants'
import { useFoodCategories } from '@/hooks/useFoodCategories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@testing-library/jest-dom'

jest.mock('@/hooks/useRestaurants')
jest.mock('@/hooks/useFoodCategories')

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ range: '$' }),
  })
) as jest.Mock

const mockRestaurants = [
  {
    id: '1',
    name: 'Test Restaurant',
    rating: 4.5,
    filter_ids: ['123'],
    image_url: '/images/test.png',
    delivery_time_minutes: 30,
    price_range_id: 'abc',
    is_open: true,
    price_range: '$',
  },
]

const mockFoodCategories = [
  {
    id: '1',
    name: 'Test Category',
    image_url: '/images/test.png',
  },
]

const queryClient = new QueryClient()

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('RestaurantCard Component', () => {
  test('renders RestaurantCard correctly when open', () => {
    render(
      <RestaurantCard
        isOpen={true}
        deliveryTimeMinutes={30}
        imageUrl="/images/test.png"
        name="Test Restaurant"
      />
    )

    expect(screen.getByText('Open')).toBeInTheDocument()
    expect(screen.getByText('30 min')).toBeInTheDocument()
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
  })

  test('renders RestaurantCard correctly when closed', () => {
    render(
      <RestaurantCard
        isOpen={false}
        deliveryTimeMinutes={30}
        imageUrl="/images/test.png"
        name="Test Restaurant"
      />
    )

    expect(screen.getByText('Closed')).toBeInTheDocument()
    expect(screen.getByText('Opens tomorrow at 12 pm')).toBeInTheDocument()
  })
})

describe('Home Page', () => {
  test('renders the Home page with restaurant cards', async () => {
    ;(useRestaurants as jest.Mock).mockReturnValue({
      data: mockRestaurants,
      isLoading: false,
      error: null,
    })
    ;(useFoodCategories as jest.Mock).mockReturnValue({
      data: mockFoodCategories,
      isLoading: false,
      error: null,
    })

    render(<Home />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Restaurants')).toBeInTheDocument()
      expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
    })
  })

  test('renders loading state', () => {
    ;(useRestaurants as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    })
    ;(useFoodCategories as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    })

    render(<Home />, { wrapper })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders error state', () => {
    ;(useRestaurants as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: { message: 'Failed to fetch restaurants' },
    })
    ;(useFoodCategories as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
    })

    render(<Home />, { wrapper })

    expect(
      screen.getByText('Error: Failed to fetch restaurants')
    ).toBeInTheDocument()
  })
})
