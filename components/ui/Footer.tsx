import Link from 'next/link';
import { CONFIG } from '@/lib/config';

const payments = ['Visa', 'Mastercard', 'UPI', 'PayPal'];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800" id="footer">
      <div className="container mx-auto grid gap-8 px-4 py-12 text-sm md:grid-cols-5">
        <div>
          <div className="font-semibold">Customer Care</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="#">Shipping</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Size Guide</Link></li>
            <li><Link href="#contact-strip">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1">
            <li><Link href={CONFIG.legal.terms}>Terms &amp; Conditions</Link></li>
            <li><Link href={CONFIG.legal.privacy}>Privacy Policy</Link></li>
            <li><Link href={CONFIG.legal.cookies}>Cookies</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow Us</div>
          <ul className="mt-2 space-y-1">
            <li><Link href={CONFIG.contact.socials.instagram}>Instagram</Link></li>
            <li><Link href={CONFIG.contact.socials.facebook}>Facebook</Link></li>
            <li><Link href={CONFIG.contact.socials.youtube}>YouTube</Link></li>
            <li><Link href={CONFIG.contact.socials.pinterest}>Pinterest</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Payments</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded-md border border-neutral-300 px-3 py-1 text-xs font-medium dark:border-neutral-700"
                aria-label={`${p} accepted`}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-4 space-y-1 text-xs opacity-70">
            <p>GSTIN: 29ABCDE1234F1Z5 (placeholder)</p>
            <p>Warehouse: {CONFIG.contact.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-center text-xs opacity-70 dark:border-neutral-800">
        {CONFIG.credit}
      </div>
    </footer>
  );
}
