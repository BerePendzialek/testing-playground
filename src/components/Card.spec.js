import { render, screen } from '@testing-library/react'
import Card from './Card'
import userEvent from '@testing-library/user-event'

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

  it('calls onShowText on button click', () => {
    const onShowTextCallback = jest.fn()
    render(<Card onShowText={onShowTextCallback} title="Foo" text="Bar" />)
    const button = screen.getByRole('button', { name: /show text/i })
    userEvent.click(button)
    expect(onShowTextCallback).toHaveBeenCalled()
  })
})
