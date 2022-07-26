import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Rounting', () => {
  test('Not found pages', () => {
    render(
      <MemoryRouter initialEntries={['/sadasdasd']}>
        <Routes>
          <Route path='*' element={<h1 data-testid='404'>404</h1>} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('404')).toBeInTheDocument()
  })
})
