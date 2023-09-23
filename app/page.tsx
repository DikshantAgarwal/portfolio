
import Hero from '../components/Hero'
import MainProjects from '../components/MainProjects'
import LatestCode from '../components/LatestCode'
export default function Home() {
  return (
    <main className="dark:bg-gray-800">
     <Hero/>
     <MainProjects/>
     <LatestCode/>
    </main>
  )
}
