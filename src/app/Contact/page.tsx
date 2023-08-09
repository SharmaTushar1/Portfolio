import Footer from "../components/Footer";
import ContactUsForm from "./components/ContactUsForm";

export default function Contact() {
  return (
    <div>
      <ContactUsForm />
      <div className="mt-8 mb-8">
        <Footer />
      </div>
    </div>
  );
}