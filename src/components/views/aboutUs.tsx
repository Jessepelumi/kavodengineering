import { SectionHeading } from "../custom/sectionHeading";
import { VisionMissionText } from "../custom/visionMissionText";

export const AboutUs = () => {
  return (
    <div
      id="about"
      className="flex flex-col xl:flex-row gap-10 xl:gap-14 py-10 px-5 md:py-16 md:px-10"
    >
      <section className="xl:w-1/2">
        <SectionHeading
          section="about us"
          title="Experts in Welding & Inspection"
          paragraph="At KAVOD, we combine deep expertise in welding engineering, material science, and quality assurance to help clients deliver safer, stronger, and more reliable infrastructure."
        />
      </section>

      <section className="xl:w-1/2 flex flex-col gap-10 xl:gap-14">
        <VisionMissionText
          icon="Target.svg"
          title="Our Mission"
          paragraph="Our mission at Kavod Engineering Services is to deliver industry-leading quality assurance, inspection, and consulting services that enhance safety, compliance, and operational excellence. We strive to build long-term partnership with our clients by upholding the highest standards of integrity, professionalism, and technical expertise."
        />

        <VisionMissionText
          icon="Eye.svg"
          title="Our Vision"
          paragraph="To be a trusted leader in quality assurance and materials consulting, setting new benchmarks for excellence in the structural and manufacturing industries Through innovation, continuous improvement, and a commitment to ethical engineering practices, we aim to contribute to a safer, more efficient, and high-quality built environment."
        />
      </section>
    </div>
  );
};
