import React from 'react'
import khondokar from '../../public/experts/khondokar.png'
import liakat from '../../public/experts/liakat.png'
import samim from '../../public/experts/samim.png'
import shaikul from '../../public/experts/shaikul.png'
import tanvir from '../../public/experts/tanvir.png'
import uttam from '../../public/experts/uttam.png'
import Image from 'next/image'

function ExpertPoll() {
  const experts = [
    {
      name: 'Khondkar Morshed Millat',
      img: khondokar,
      details: 'Faculty Member at BIBM & Former Director of Sustainable Finance Department at Bangladesh Bank',
    },
    {
      name: 'Uttam Kumar Saha',
      img: uttam,
      details: 'Representative of FSM Network, and Country Manager at WSUP',
    },
    {
      name: 'Chowdhury Liakat Ali',
      img: liakat,
      details: 'Director of Sustainable Finance Department at Bangladesh Bank',
    },
    {
      name: 'Md. Shafiqul Hassan',
      img: shaikul,
      details: 'Co-chair of CWIS-FSM Support Cell at DPHE',
    },
    {
      name: 'Professor Dr. Tanvir Ahmed',
      img: tanvir,
      details: 'CWIS-CB Hub, ITN-BUET',
    },
    {
      name: 'Shamim Ahmed',
      img: samim,
      details: 'President, Bangladesh Plastic Goods Manufacturers & Exporters Association (BPGMEA)',
    },
  ]
  return (
    <div className="p-4 sm:p-8 flex flex-col gap-4 bg-lightGray rounded-3xl border-primary border-2">
      <h4 className="text-2xl text-heading font-bold py-2">
        4.<span className="ps-2 md:ps-6">Expert Pool of the Campaign</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-6">
        {experts.map(expert => (
          <div className="flex justify-center" key={expert.name}>
            <div className="w-[300px] h-80 bg-white rounded">
              <div className="p-3 ">
                <Image className="h-52 w-52 mx-auto" src={expert.img} alt={expert.name} />
                <div>
                  <h4 className="font-semibold text-heading italic text-center py-2">{expert.name}</h4>
                  <p className="text-xs text-center">{expert.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpertPoll
