import { render, cleanup } from '@testing-library/react'

import DefaultContainerLayout from './DefaultContainerLayout'

describe('DefaultContainerLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DefaultContainerLayout />)
    }).not.toThrow()
  })
})
