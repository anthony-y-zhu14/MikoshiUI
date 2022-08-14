import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ConfirmationDialog } from '@mikoshi/application-components'
import '@testing-library/jest-dom'

describe('components/application/app-bar', () => {
  it('should render', () => {
    const props = {
      isOpen: true,
      title: 'test',
      onConfirm: () => {},
      onCancel: () => {},
      bindingElement: document.body
    }
    const content = 'A simple modal component'

    render(
      <ConfirmationDialog {...props}>
        <div>{content}</div>
      </ConfirmationDialog>
    )

    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
  })
})