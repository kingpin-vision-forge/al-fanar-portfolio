import { CONFIG } from '@/lib/config';
import { Container } from './Container';

export function ContactStrip() {
  const { address, phone, email, whatsapp, hours } = CONFIG.contact;
  return (
    <section id="contact-strip" className="bg-neutral-100 py-8 text-sm dark:bg-neutral-900/60">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Visit us</p>
            <p className="opacity-80">{address}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:underline" href={`tel:${phone}`}>Call: {phone}</a>
            <a className="hover:underline" href={`mailto:${email}`}>Email: {email}</a>
            <a className="hover:underline" href={whatsapp}>WhatsApp</a>
            <span>Hours: {hours}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
