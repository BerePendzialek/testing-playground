import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders title and text', () => {
    render(<Card title="Foo" text="Bar" />)
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument()
  })
  it('renders the text, if isTextVisible is true', () => {
    render(<Card isTextVisible title="Foo" text="Bar" />)
    expect(screen.queryByText(/bar/i)).toBeInTheDocument()
  })

  it.todo('calls onShowText on button click')
})
