import SynergyClubNavbar from "./Navbar";
import SynergyClubHero from "./HeroSC";
import Branches from "./Branches";
import Activities from "./Activities";
import Events from "./Events";
import Gallery from "./Gallery";
import AboutHome from "./AboutHome";
import SynergyClubFooter from "./FooterSC";
import Team from "./TeamSC";
import Why from "./Why";

export default function HomeSC() {
    return<>
     <SynergyClubNavbar />
        <SynergyClubHero />
        <AboutHome />
        {/* <Branches /> */}
        <Activities />
        <Events />
        <Gallery />
        <Team />
        <Why />
        <SynergyClubFooter />
    </>
}