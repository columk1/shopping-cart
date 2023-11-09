import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'
// import { userEvent } from '@testing-library/user-event'

describe('App', async () => {
  it('Renders the homepage (Root.jsx with Hero.jsx in the outlet)', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it('Renders a header element', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })
  it('Renders a navbar', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})

describe('Routes configured correctly', () => {
  it('Renders homepage', async () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch('A revolution begins')
    expect(screen.getByRole('button').textContent).toMatch('Start Shopping')
  })

  //   it('Renders shop page', async () => {
  //     const user = userEvent.setup()
  //     render(<App />)
  //     await user.click(screen.getByRole('link', { name: 'shopping_cart' }))
  //     screen.debug()
  //   })
})
