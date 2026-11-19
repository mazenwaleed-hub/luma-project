import { Nav } from "../components/Nav/Nav"
import { HeroSection } from "../components/HeroSection/HeroSection"
import { Collection } from "../components/Collection/Collection"
import { About } from "../components/About/About"
export function HomePage(){
    return (
        <>
        <Nav />
        <HeroSection />
        <Collection />
        <About />
        </>
    )
}