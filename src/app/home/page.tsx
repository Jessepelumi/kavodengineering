import { AboutUs } from "./components/aboutUs";
import { HomeHeader } from "./components/homeHeader";
import { IndustriesServed } from "./components/industriesServed";
import { OurServices } from "./components/ourServices";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <AboutUs />
      <IndustriesServed />
      <OurServices />
    </>
  );
}
