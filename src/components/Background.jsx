'use client'

import React, { useState } from 'react'
import ActionButton from './ActionButton'

const text = ''

function Background() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray">
      <h4 className="text-2xl text-heading font-bold py-2">
        1.<span className="ps-2 md:ps-6">Background</span>
      </h4>
      <div className="flex flex-col gap-4 text-justify">
        <p>
          Practical Action has been working on the transformative model for informal sanitation and waste workers for
          several years, with financial support from Bill and Melinda Gates Foundation (BMGF) and other development
          partners. Focused in ten municipalities (Bagerhat, Barguna, Faridpur, Kalaroa, Kolapara, Laksham, Magura,
          Meherpur, Rajbari, and Satkhira municipalities) and one city corporation (Gazipur City Corporation), Practical
          Action is extending much-needed support to informal workers to form co-operatives, through which cooperatives
          and entrepreneurs are improving their entrepreneurial skills, ensuring Occupational Health and Safety (OHS) at
          work, enjoying Social Safety Net Systems, and actively participating in municipal and other LGI-level
          decision-making processes. Practical Action is also exploring concessional financing options for entrepreneurs
          and cooperative members involved in these ventures. To further contribute to this effort, Practical Action
          took initiative to launch a nationwide campaign and solicit sustainable business ideas in the sanitation and
          waste management sectors, and welcoming Expression of Interests (EOIs) from interested participants.
        </p>
        {showFullText && (
          <>
            <p>
              Through this campaign entrepreneurs in sanitation and waste management sectors will get the opportunity to
              showcase their innovative and inclusive bankable business ideas in front of the Expert Pool. The expert
              pool will identify five innovative business ideas and award three deserving green business ideas.
            </p>
            <p>
              Expressions of Interests (EOIs) are expected from CMSMEs (Cottage, Micro, Small and Medium Enterprises)
              and Women Entrepreneurs who are engaged in Sanitation and Waste Management ventures. It is also expected
              that the participants comply with the criteria of this campaign and eligible for further assistances in
              accessing green and sustainable finance.
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

export default Background
