import SynergyClubNavbar from "./Navbar";
import SynergyClubHero from "./HeroSC";
import Branches from "./Branches";
import Activities from "./Activities";
import Events from "./Events";

export default function HomeSC() {
    return<>
     <SynergyClubNavbar />
        <SynergyClubHero />
        {/* <Branches /> */}
        <Activities />
        <Events />
    </>
}