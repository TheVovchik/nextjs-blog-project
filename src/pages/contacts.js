import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>
            Contact Me
          </title>
          <meta name="description" content="Send me your questions!" />
      </Head>

      <ContactForm />
    </>
  );
}
