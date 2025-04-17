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
          title="Experts in Welding & Quality Assurance"
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
            paragraph="Our mission at Kavod Engineering Services is to deliver industry-leading quality assurance, inspection, and consulting services at an effective cost without compromising safety and regulatory compliance while fostering long-term partnerships with our clients by upholding the highest standards of integrity, professionalism, and technical expertise."
          />
        </div>

        <div className="w-full md:w-1/2">
          <VisionMissionText
            image="visionImage.jpeg"
            title="Our Vision"
            paragraph="To be a trusted leader in quality assurance and materials consulting through innovation, continuous improvement, and a commitment to ethical engineering practices ensuring safer, efficient, and high-quality built environment."
          />
        </div>
      </section>
    </div>
  );
};
