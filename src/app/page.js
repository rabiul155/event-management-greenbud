import ApplicationProcess from '@/components/ApplicationProcess'
import Background from '@/components/Background'
import Banner from '@/components/Banner'
import CampaignDetails from '@/components/CampaignDetails'
import Disclaimer from '@/components/Disclaimer'
import Download from '@/components/Download'
import ExpertPoll from '@/components/ExpertPoll'
import Navbar from '@/components/Navbar'
import ParticipatingCriteria from '@/components/ParticipatingCriteria'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <div className="text-baseline">
      <Navbar />
      <Banner />
      <div className=" w-full flex justify-center p-4">
        <div className="max-w-screen-xl flex flex-col justify-center gap-4">
          <Download />
          <Background />
          <ParticipatingCriteria />
          <CampaignDetails />
          <ExpertPoll />
          <Timeline />
          <ApplicationProcess />
          <Disclaimer />
          <Download />
        </div>
      </div>
    </div>
  )
}
