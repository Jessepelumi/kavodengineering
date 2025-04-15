import ContactForm from "@/app/contact/components/contactForm";
import { ContactHeader } from "./components/contactHeader";

export default function Contact() {
  return (
    <>
      <ContactHeader
        section="contact us"
        title="Let's Talk"
        titleTwo="Quality & Integrity"
        description="Whether you're planning a new project or need expert guidance, our team is ready to help."
      />

      <div className="relative pb-20 px-[5%] lg:px-[10%] xl:px-[15%]">
        <div className="relative z-10 -mt-20">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
