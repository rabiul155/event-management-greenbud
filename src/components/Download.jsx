import React from 'react'
import ActionButton from './ActionButton'

function Download() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 py-8">
      <ActionButton className="font-semibold text-base text-secondary rounded-full border-2 border-secondary bg-white px-6 py-3">
        Download PDF <span>(english)</span>
      </ActionButton>
      <ActionButton className="font-semibold text-base text-secondary rounded-full border-2 border-secondary bg-white px-6 py-3">
        Download PDF <span>(bangla)</span>
      </ActionButton>
    </div>
  )
}

export default Download
