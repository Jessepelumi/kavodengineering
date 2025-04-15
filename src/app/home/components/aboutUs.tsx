import { SectionHeading } from "@/components/shared/sectionHeading";
import { VisionMissionText } from "./visionMissionText";

export const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-10 xl:gap-14 py-10 px-5 md:py-16 md:px-10"
    >
      <section className="">
        <SectionHeading
          section="about us"
          title="Experts in Welding & Inspection"
          paragraph="At Kavod Engineering Services, our deep expertise in welding engineering, material science, and quality assurance empowers clients to deliver infrastructure that stands the test of time."
          className="items-center text-center"
          paragraphClassName="md:max-w-[85%] lg:max-w-[60%] xl:max-w-[40%]"
        />
      </section>

      <section className="flex flex-col md:flex-row gap-10 xl:gap-14">
        <div className="w-full md:w-1/2">
          <VisionMissionText
            image="missionImage.jpeg"
            title="Our Mission"
            paragraph="To provide industry-leading inspection, testing, and consulting services that elevate safety, compliance, and performance, fostering long-term partnerships built on integrity and technical excellence."
          />
        </div>

        <div className="w-full md:w-1/2">
          <VisionMissionText
            image="visionImage.jpeg"
            title="Our Vision"
            paragraph="To be the benchmark for quality assurance and materials consulting in structural and manufacturing industries, driving innovation, continuous improvement, and ethical engineering for a safer, more efficient built environment."
          />
        </div>
      </section>
    </div>
  );
};
