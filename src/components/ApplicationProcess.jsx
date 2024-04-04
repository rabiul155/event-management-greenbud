import React from 'react'

function ApplicationProcess() {
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray">
      <h4 className="text-2xl text-heading font-bold py-2">
        6.<span className="ps-2 md:ps-6">Application Process:</span>
      </h4>
      <div className="flex flex-col gap-4 text-justify">
        <div className="font-semibold">
          Individuals/Organizations that fulfil the conditions of required criteria mentioned in this document can apply
          for the competition under ”Bridging Between Sanitation & Waste Management Enterprises and Financial
          Institutions” program. The application should be submitted electronically by filling out the EOI form along
          with proposal documents and supporting documents as attachment to{' '}
          <span className="text-primary underline">support@greenbudbd.com</span>.
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-semibold">
            For further information, individuals/organizations can seek further information or clarification to:
          </h6>
          <div className="flex flex-col md:flex-row justify-center md:justify-around gap-4">
            <address className="font-semibold">
              <span className="text-heading italic">L. M. Sirajus Salekin</span>
              <br />
              <span>Green Financing Specialist</span>
              <br />
              <span>Practical Action in Bangladesh</span>
              <br />
              <span className="text-primary text-wrap underline">Sirajus.Salekin@practicalaction.org.bd</span>
              <br />
              <span>+8801713071416</span>
            </address>
            <address className="font-semibold">
              <span className="text-heading italic">Engr. Syed Tasnem Mahmood</span>
              <br />
              <span>Chief Executive Officer</span>
              <br />
              <span>Greenbud</span>
              <br />
              <span className="text-primary underline">tasnem@greenbudbd.com</span>
              <br />
              <span>+8801783391952</span>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationProcess
