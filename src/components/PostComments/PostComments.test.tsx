import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })

  it('Deve inserir dois comentários', () => {
    render(<PostComment />)

    const textArea = screen.getByTestId('text-area-comment')
    const button = screen.getByTestId('btn-comment')

    fireEvent.change(textArea, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(button)

    fireEvent.change(textArea, { target: { value: 'Segundo comentário' } })
    fireEvent.click(button)

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
