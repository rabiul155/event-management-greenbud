import React from 'react'

function Disclaimer() {
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray">
      <h4 className="text-2xl text-heading font-bold py-2">
        7.<span className="ps-2 md:ps-6">Disclaimer:</span>
      </h4>
      <div className="flex flex-col gap-4 text-justify">
        <div>
          Practical Action reserves the right to make final decisions on all aspects of the event, including scheduling,
          content, participants, and any unforeseen circumstances that may arise. These decisions are at the sole
          discretion of the organiser and are final. Participants, attendees, and stakeholders are expected to follow
          these decisions as part of their involvement in the event. The organiser makes decisions that are in the best
          interests of the event and its participants. Practical Action does not provide any direct financial benefits
          to campaign participants or stakeholders. Practical Action also humbly discourages all forms of persuasion in
          favour of any participant.
        </div>
        <div className=" text-[#416BAB]">
          ***Please note that, The EOI form and business proposal has to be submitted electronically only as a PDF file
          (.pdf) ***
        </div>
        <div>
          Shortlisted individuals/organisations will be notified within a week after submission. However, the program
          team reserves the right to change or cancel the requirement at any time during the selection process.
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
