import { render, cleanup } from '@testing-library/react'

import FavoritesPage from './FavoritesPage'

describe('FavoritesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FavoritesPage />)
    }).not.toThrow()
  })
})
