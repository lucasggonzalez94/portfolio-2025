import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  color?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export default function Button({
  children,
  color = '#560bad',
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ color }}
    >
      {children}
    </button>
  )
}
