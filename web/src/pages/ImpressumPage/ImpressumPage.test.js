import { render, cleanup } from '@testing-library/react'

import ImpressumPage from './ImpressumPage'

describe('ImpressumPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ImpressumPage />)
    }).not.toThrow()
  })
})
