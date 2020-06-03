import { render, cleanup } from '@testing-library/react'

import EditRecipePage from './EditRecipePage'

describe('EditRecipePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<EditRecipePage />)
    }).not.toThrow()
  })
})
