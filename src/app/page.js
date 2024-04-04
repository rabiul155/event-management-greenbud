import Background from '@/components/Background'
import Banner from '@/components/Banner'
import CampaignDetails from '@/components/CampaignDetails'
import ExpertPoll from '@/components/ExpertPoll'
import Navbar from '@/components/Navbar'
import ParticipatingCriteria from '@/components/ParticipatingCriteria'

export default function Home() {
  return (
    <div className="text-baseline">
      <Navbar />
      <Banner />
      <div className=" w-full flex justify-center p-4">
        <div className="max-w-screen-xl flex flex-col justify-center gap-4">
          <Background />
          <ParticipatingCriteria />
          <CampaignDetails />
          <ExpertPoll />
        </div>
      </div>
    </div>
  )
}
