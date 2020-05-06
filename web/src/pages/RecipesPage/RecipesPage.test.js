import { render, cleanup } from '@testing-library/react'

import RecipesPage from './RecipesPage'

describe('RecipesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RecipesPage />)
    }).not.toThrow()
  })
})
