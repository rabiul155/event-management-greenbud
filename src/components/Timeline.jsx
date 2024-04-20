import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

function Timeline() {
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-white text-gray-800 rounded-3xl border-primary border-2">
      <h4 className="text-2xl text-heading font-bold py-2">
        5.<span className="ps-2 md:ps-6">Timeline (tentatively):</span>
      </h4>

      <div className="flex flex-col gap-2 ">
        <h6 className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary  h-6 w-6" />
          </span>
          <span className="font-semibold text-lg">
            The campaign announced on<span className="text-light text-xl px-2">3rd March 2024</span>
          </span>
        </h6>
        <h6 className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary  h-6 w-6" />
          </span>
          <span className="font-semibold text-lg">
            EOI submission deadline from participants by
            <span className="text-light text-xl px-2">9th May 2024</span>
          </span>
        </h6>
        <h6 className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary  h-6 w-6" />
          </span>
          <span className="font-semibold text-lg">
            Shortlisting of participants by<span className="text-light text-xl px-2">16th May 2024</span>
          </span>
        </h6>
        <h6 className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary  h-6 w-6" />
          </span>
          <span className="font-semibold text-lg">
            Grooming session and final selection round by
            <span className="text-light text-xl px-2">23rd May 2024</span>
          </span>
        </h6>
        <h6 className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary  h-6 w-6" />
          </span>
          <span className="font-semibold text-lg">
            Winners announcement and awarding ceremony on
            <span className="text-light text-xl px-2">30th May 2024</span>
          </span>
        </h6>
      </div>
    </div>
  )
}

export default Timeline
