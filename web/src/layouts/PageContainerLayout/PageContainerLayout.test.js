import { render, cleanup } from '@testing-library/react'

import PageContainerLayout from './PageContainerLayout'

describe('PageContainerLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PageContainerLayout />)
    }).not.toThrow()
  })
})
