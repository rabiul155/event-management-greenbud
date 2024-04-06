'use client'

import React, { useState } from 'react'
import ActionButton from './ActionButton'
import { IoMdArrowDropright } from 'react-icons/io'

function CampaignDetails() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray">
      <h4 className="text-2xl text-heading font-bold py-2">
        3.<span className="ps-2 md:ps-6">Campaign Details</span>
      </h4>
      <div className="flex flex-col gap-2 text-justify">
        <div className="flex flex-col gap-2">
          <h6 className="flex gap-2">
            <span>
              <IoMdArrowDropright className="block text-primary h-6 w-6" />
            </span>
            <span className="text-lg text-primary font-semibold">Call for Entries:</span>
          </h6>
          <p>
            Local enterprises and entrepreneurs engaged in the field of sanitation and waste management are cordially
            invited to submit their exemplary practices for consideration in our esteemed competition.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="flex gap-2">
            <span>
              <IoMdArrowDropright className="block text-primary h-6 w-6" />
            </span>
            <span className="text-lg text-primary font-semibold">Initial Screening:</span>
          </h6>
          <p>
            Submissions will undergo an initial screening process to ensure adherence to eligibility criteria and
            completeness of documentation.
          </p>
        </div>
        {showFullText && (
          <>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Judging Process:</span>
              </h6>
              <p>
                Following the initial screening, eligible entries will be meticulously evaluated by a distinguished
                panel of experts, who will assess them based on stringent criteria including innovation, environmental
                sustainability, social impact, scalability, financial viability, and relevant regulatory compliance
                standards.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Shortlisting:</span>
              </h6>
              <p>
                Based on the judging process, a number of outstanding submissions will be shortlisted for further
                consideration.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Grooming Session:</span>
              </h6>
              <p>
                Shortlisted participants will have the opportunity to attend a specialized grooming session as part of
                this campaign, where they will receive valuable insights, guidance, and mentorship to help them improve
                their proposals and presentation skills. Upon successfully completing the grooming sessions, the
                campaign will award certificates to recognize their active engagement. It is an excellent opportunity to
                meet with think tanks, professionals, and practitioners working to bridge the gap between Sanitation &
                Waste management ventures and Financial Institutions.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Final Selection:</span>
              </h6>
              <p>
                After the grooming session, the shortlisted participants will proceed to the final selection round,
                where they will present their refined proposals to the judging panel.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Winners Announcement:</span>
              </h6>
              <p>
                From the final selection round, three deserving champions will be honoured with awards in recognition of
                their exceptional contributions to the field of sanitation and waste management.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="flex gap-2">
                <span>
                  <IoMdArrowDropright className="block text-primary h-6 w-6" />
                </span>
                <span className="text-lg text-primary font-semibold">Way forward:</span>
              </h6>
              <p>
                Out of three champions, at least two will be receiving further assistance in accessing concessional
                finance from commercial banks through networking and linkage events.
              </p>
            </div>
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

export default CampaignDetails
