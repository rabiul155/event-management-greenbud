'use client'

import { twMerge } from 'tailwind-merge'

const defaultClassNames =
  'w-auto bg-primary text-white focus:ring-secondary inline-flex justify-center items-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-lg transition duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2'

function ActionButton({ children, onClick = () => {}, disabled = false, className = '', type = 'button' }) {
  const extraClassName = twMerge(defaultClassNames, className)

  return (
    <button disabled={disabled} type={type} onClick={onClick} className={extraClassName}>
      {children}
    </button>
  )
}

export default ActionButton
