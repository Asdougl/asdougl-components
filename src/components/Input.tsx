import React from 'react'
import classNames from 'classnames'

export interface InputProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  error?: boolean
}

export const Input = ({ value, onChange, disabled, error }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={classNames('px-2 py-2 rounded border', {
        'border-blue-500': !disabled && !error,
        'border-red-500': !disabled && error,
        'border-gray-400': disabled,
      })}
    />
  )
}
