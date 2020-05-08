import { render, cleanup } from '@testing-library/react'

import RecipePage from './RecipePage'

describe('RecipePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RecipePage />)
    }).not.toThrow()
  })
})
