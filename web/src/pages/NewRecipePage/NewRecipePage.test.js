import { render, cleanup } from '@testing-library/react'

import NewRecipePage from './NewRecipePage'

describe('NewRecipePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NewRecipePage />)
    }).not.toThrow()
  })
})
