import Link from "next/link";
import { brand, contactChannels } from "@/lib/content";

const footerNav = [
  {
    label: "Universe",
    links: [
      { label: "Men", href: "#mens" },
      { label: "Women", href: "#womens" },
      { label: "Children", href: "#children" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Media", href: "#media" },
      { label: "Careers", href: "mailto:careers@alfanarenterprises.com" },
    ],
  },
  {
    label: "Support",
    links: [
      { label: "Stores", href: "#stores" },
      { label: "Contact", href: "#contact" },
      { label: "Book Styling", href: "/appointments" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand-line)] bg-[#f6f1e8] text-sm text-[#4a4a4a]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="space-y-5">
          <div className="serif text-2xl font-semibold tracking-[0.25em] text-[#1b1b1b]">
            {brand.name}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#4a4a4a]">
            {brand.description}
          </p>
          <div className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-[#807c74]">
            {contactChannels.map((channel) => (
              <div key={channel.value}>{channel.value}</div>
            ))}
          </div>
        </div>

        {footerNav.map((section) => (
          <div key={section.label} className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.45em] text-[#7c7c7c]">
              {section.label}
            </div>
            <ul className="space-y-3 text-sm text-[#4f4f4f]">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#1b1b1b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[color:var(--brand-line)] py-5 text-center text-[10px] uppercase tracking-[0.4em] text-[#7b7b7b]">
        © {new Date().getFullYear()} {brand.name}. Crafted for family wardrobes.
      </div>
    </footer>
  );
}
