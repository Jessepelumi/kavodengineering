import ContactForm from "@/app/contact/components/contactForm";
import { ContactHeader } from "./components/contactHeader";

export default function Contact() {
  return (
    <>
      <ContactHeader
        section="contact us"
        title="Need a Consultation?"
        description="Have questions or need expert assistance? Reach out to us, and our team will be happy to assist you."
      />

      <div className="relative pb-20 px-[5%] lg:px-[10%] xl:px-[15%]">
        <div className="relative z-100 -mt-20">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
