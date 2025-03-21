import { AboutUs } from "@/components/views/aboutUs";
import { HomeHeader } from "@/components/views/homeHeader";
import { IndustriesServed } from "@/components/views/industriesServed";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <AboutUs />
      <IndustriesServed />
    </div>
  );
}
