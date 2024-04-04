import React from 'react'

function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-primary via-white to-primary py-12 flex flex-col gap-2 justify-center item-center">
      <h4 className="text-primary font-medium text-lg text-center">Campaign For</h4>
      <div className="flex justify-center w-full">
        <h2 className="text-secondary text-2xl font-bold text-center max-w-[600px]">
          Green & Sustainable Business Ideas in Sanitation and Waste Management Sector
        </h2>
      </div>
    </div>
  )
}

export default Banner
