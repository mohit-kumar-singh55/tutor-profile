import AboutTutor from '../components/TutorProfile/AboutTutor'
import Resume from '../components/TutorProfile/Resume'
import Reviews from '../components/TutorProfile/Reviews'
import Schedule from '../components/TutorProfile/Schedule'
import Subject from '../components/TutorProfile/Subject'
import TutorHeroPage from '../components/TutorProfile/TutorHeroPage'
import TutorHeroPageMobile from '../components/TutorProfile/TutorHeroPageMobile'
import TutorFooter from "../components/TutorProfile/TutorFooter";

function TutorProfile() {
  return (
    <div className="full-page-snap-main">
      <TutorHeroPageMobile />
      <TutorHeroPage />
      <Reviews />
      {/* <AboutTutor /> */}
      {/* <Schedule /> */}
      <Resume />
      {/* <Subject /> */}
      <TutorFooter />
    </div>
  )
}


export default TutorProfile
