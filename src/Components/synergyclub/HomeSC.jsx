import SynergyClubNavbar from "./Navbar";
import SynergyClubHero from "./HeroSC";
import Branches from "./Branches";
import Activities from "./Activities";
import Events from "./Events";
import Gallery from "./Gallery";
import SynergyClubAbout from "./AboutSC";
import SynergyClubFooter from "./FooterSC";
import Team from "./TeamSC";

export default function HomeSC() {
    return<>
     <SynergyClubNavbar />
        <SynergyClubHero />
        {/* <Branches /> */}
        <Activities />
        <Events />
        <Gallery />
        <SynergyClubAbout />
        <Team />
        <SynergyClubFooter />
    </>
}