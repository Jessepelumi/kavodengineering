import { AboutUs } from "@/components/views/aboutUs";
import { HomeHeader } from "@/components/views/homeHeader";
import { IndustriesServed } from "@/components/views/industriesServed";
import { OurServices } from "@/components/views/ourServices";

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
