import { Metadata } from "next";
import Footer from "../components/Footer";
import ContactUsForm from "./components/ContactUsForm";

export const metadata: Metadata = {
  title: 'Contact - Tushar Sharma',
  description: "Contact page of Tushar Sharma's portfolio",
};

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