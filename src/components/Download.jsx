'use client'

import React from 'react'

function Download() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 py-8">
      <a
        href="https://docs.google.com/forms/d/1kKfXOELAOcDdTTzc7sgvrPCuCjLcP5Is9Ur_t6sT76M/edit?ts=66111137"
        className="w-auto inline-flex justify-center items-center text-sm font-semibold shadow-lg transition duration-200 hover:bg-primaryDark hover:text-white text-secondary rounded-full border-2 border-secondary bg-white px-4 py-3"
        download
        target="_blank"
      >
        Register Now
      </a>
      <a
        href="/EOI_DOC/EOI_Campaign.docx"
        className="w-auto inline-flex justify-center items-center text-sm font-semibold shadow-lg transition duration-200 hover:bg-primaryDark hover:text-white text-secondary rounded-full border-2 border-secondary bg-white px-4 py-3"
        download
      >
        Download Application Form <span>(english)</span>
      </a>

      <a
        href="/EOI_DOC/EOI_Campaign_Bangla.docx"
        className="w-auto inline-flex justify-center items-center text-sm font-semibold shadow-lg transition duration-200 hover:bg-primaryDark hover:text-white text-secondary rounded-full border-2 border-secondary bg-white px-4 py-3"
        download
      >
        Download Application Form <span>(bangla)</span>
      </a>
    </div>
  )
}

export default Download
