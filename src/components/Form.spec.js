import { render, screen } from '@testing-library/react'
import Form from './Form'
import userEvent from '@testing-library/user-event'

describe('Form', () => {
  it('starts with a disabled button', () => {
    render(<Form />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
  it('only has an enabled button if both inputs are filled', () => {
    render(<Form />)
    userEvent.type(screen.getByLabelText(/name/i), 'John')
    expect(screen.getByRole('button')).toBeDisabled()
    userEvent.type(screen.getByLabelText(/e-?mail/i), 'john@doe.com')
    expect(screen.getByRole('button')).toBeEnabled()
  })
  it('sends data object when using onSubmit', () => {
    const onSubmitCallback = jest.fn()
    render(<Form onSubmit={onSubmitCallback} />)

    userEvent.type(screen.getByLabelText(/name/i), 'John')
    userEvent.type(screen.getByLabelText(/e-?mail/i), 'john@doe.com')
    userEvent.click(screen.getByRole('button'))
    expect(onSubmitCallback).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@doe.com',
    })
  })
})
