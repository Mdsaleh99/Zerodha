import Awards from "./Awards";
import Education from "./Education";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount"



export default function HomePage() {
  return (
    <>
        
        <HeroSection />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        
    </>
  )
}
