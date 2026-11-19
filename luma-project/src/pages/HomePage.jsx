import { Nav } from "../components/Nav/Nav"
import { HeroSection } from "../components/HeroSection/HeroSection"
import { Collection } from "../components/Collection/Collection"
import { About } from "../components/About/About"
import { AboutBar } from "../components/AboutBar.jsx/AboutBar"
import { CTA } from "../components/CTA/CTA"
import { Footer } from "../components/Footer/Footer"
export function HomePage(){
    return (
        <>
        <Nav />
        <HeroSection />
        <Collection />
        <About />
        <AboutBar />
        <CTA/>
        <Footer/>
        </>
    )
}