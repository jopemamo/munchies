import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'
import RestaurantCard from '@/components/RestaurantCard'
import { useRestaurants } from '@/hooks/useRestaurants'
import { Restaurant } from '@/types/restaurant'
import '@testing-library/jest-dom'

jest.mock('@/hooks/useRestaurants')

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
  },
]

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

    render(<Home />)

    expect(screen.getByText("Restaurant's")).toBeInTheDocument()
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
  })

  test('renders loading state', () => {
    ;(useRestaurants as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    })

    render(<Home />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders error state', () => {
    ;(useRestaurants as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: { message: 'Failed to fetch restaurants' },
    })

    render(<Home />)

    expect(
      screen.getByText('Error: Failed to fetch restaurants')
    ).toBeInTheDocument()
  })
})
