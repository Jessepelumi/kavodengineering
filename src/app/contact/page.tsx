import ContactForm from "@/components/views/contactForm";
import { ServiceContactHeader } from "@/components/views/serviceContactHeader";

export default function Contact() {
  return (
    <>
      <ServiceContactHeader
        section="contact us"
        title="Need a Consultation?"
        description="Have questions or need expert assistance? Reach out to us, and our team will be happy to assist you."
      />

      <div className=" flex justify-center items-center h-screen px-[5%] lg:px-[10%] xl:px-[15%]">
        <ContactForm />
      </div>
    </>
  );
}
