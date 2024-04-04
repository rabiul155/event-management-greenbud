'use client'

import { twMerge } from 'tailwind-merge'

const defaultClassNames =
  'w-auto bg-primary text-white focus:ring-secondary inline-flex justify-center items-center rounded-md border-2 border-transparent py-2 px-4 text-sm font-medium shadow-lg transition duration-100 focus:outline-none'

function ActionButton({ children, onClick = () => {}, className = '', type = 'button' }) {
  const extraClassName = twMerge(defaultClassNames, className)

  return (
    <button type={type} onClick={onClick} className={extraClassName}>
      {children}
    </button>
  )
}

export default ActionButton
