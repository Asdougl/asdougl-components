import React, { FC } from 'react'

type ButtonStyle = 'primary' | 'secondary' | 'teritary'

export interface ButtonProps {
  onClick: () => void
  disabled?: boolean
  style?: ButtonStyle
  submit?: boolean
}

const buttonStyle = (style: ButtonStyle) => {
  switch (style) {
    case 'primary':
      return 'bg-blue-600 border-blue-600 text-white'
    case 'secondary':
      return 'bg-white border-blue-600 text-blue-600'
    case 'teritary':
      return 'bg-white border-white text-blue-600'
  }
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  style = 'primary',
  submit,
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg border-2 ${buttonStyle(style)}`}
    >
      {children}
    </button>
  )
}
