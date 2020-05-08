import { render, cleanup } from '@testing-library/react'

import SettingsPage from './SettingsPage'

describe('SettingsPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsPage />)
    }).not.toThrow()
  })
})
