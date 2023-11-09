import { render, screen } from '@testing-library/react'
import Products from '../src/components/Products/Products.jsx'
import { BrowserRouter } from 'react-router-dom'

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 },
  },
]

describe('Products', () => {
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
      ...actual,
      useOutletContext: () => {
        return { products }
      },
    }
  })

  it('Renders a product image', async () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    )
    const productImage = screen.getAllByRole('img')[0]
    expect(productImage).toBeInTheDocument()
  })

  it('Renders the correct link', async () => {
    render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/shop/1')
  })
})
