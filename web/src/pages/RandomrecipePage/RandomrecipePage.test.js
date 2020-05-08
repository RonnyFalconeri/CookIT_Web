import { render, cleanup } from '@testing-library/react'

import RandomrecipePage from './RandomrecipePage'

describe('RandomrecipePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RandomrecipePage />)
    }).not.toThrow()
  })
})
