'use client'

import React, { useState } from 'react'
import ActionButton from './ActionButton'
import { IoMdArrowDropright } from 'react-icons/io'

function ParticipatingCriteria() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray">
      <h4 className="text-2xl text-heading font-bold py-2">
        2. <span className="ps-6">Participating Criteria</span>
      </h4>
      <div className="flex flex-col gap-2 text-justify">
        <p className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary h-6 w-6" />
          </span>
          <span className="font-semibold">
            The campaign is open to CMSMEs and Women Entrepreneurs of all sizes operating only in the sanitation and
            waste management sectors.
          </span>
        </p>
        <p className="flex items-start gap-2">
          <span>
            <IoMdArrowDropright className="block text-primary h-6 w-6" />
          </span>
          <span className="font-semibold">
            Participants must showcase tangible business practices or initiatives that have positively impacted
            sanitation and waste management sectors.
          </span>
        </p>
        {showFullText && (
          <>
            <p className="flex items-start gap-2">
              <span>
                <IoMdArrowDropright className="block text-primary h-6 w-6" />
              </span>
              <span className="font-semibold">
                Demonstrate compliance with relevant environmental regulations and standards.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span>
                <IoMdArrowDropright className="block text-primary h-6 w-6" />
              </span>
              <span className="font-semibold">
                Explanation of how OHS and workers dignity are safeguarded in the workplace. How gender equity and women
                empowerment are considered in the business.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span>
                <IoMdArrowDropright className="block text-primary h-6 w-6" />
              </span>
              <span className="font-semibold">
                Demonstrate good sanitation and waste management practices such as waste reduction, recycling, resource
                recovery, pollution prevention, and community engagement.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span>
                <IoMdArrowDropright className="block text-primary h-6 w-6" />
              </span>
              <span className="font-semibold">
                Outline plans for potential business expansion in sanitation and waste management. This could include
                strategies for scaling up existing initiatives, entering new markets, collaborating with stakeholders,
                or implementing innovative technologies to promote growth and sustainability.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span>
                <IoMdArrowDropright className="block text-primary h-6 w-6" />
              </span>
              <span className="font-semibold">
                Participants are encouraged to highlight innovative solutions of their bankable business model that
                demonstrate scalability and potential for replication in various contexts or locations. This could
                include creating scalable business models, technologies, or approaches that can be adapted to different
                scales and environments to effectively address sanitation and waste management challenges.
              </span>
            </p>
          </>
        )}
      </div>
      <div className="flex justify-center">
        <ActionButton
          onClick={() => {
            setShowFullText(pre => !pre)
          }}
          className="bg-white text-secondary border-secondary rounded-full px-6 py-2"
        >
          {showFullText ? 'Show less' : 'Show more'}
        </ActionButton>
      </div>
    </div>
  )
}

export default ParticipatingCriteria
