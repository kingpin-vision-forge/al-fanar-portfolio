import Link from "next/link";
import { brand, contactChannels } from "@/lib/content";

const footerNav = [
  {
    label: "Customer Care",
    links: [
      { label: "Shipping", href: "#shipping" },
      { label: "Returns", href: "#returns" },
      { label: "Size Guide", href: "#size-guide" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "T&C", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
  {
    label: "Follow Us",
    links: [
      { label: "Instagram", href: "#instagram" },
      { label: "Facebook", href: "#facebook" },
      { label: "Twitter", href: "#twitter" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "mailto:careers@alfanarenterprises.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[var(--navy-900)] via-[var(--navy-900)] to-[var(--navy)] text-sm text-[color:var(--cream)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:flex md:items-start md:justify-between md:px-0 md:py-20">
        <div className="space-y-5 max-w-xs">
          <div className="text-2xl font-black uppercase tracking-[0.3em] text-[color:var(--cream)]">
            {brand.name}
          </div>
          <p className="text-sm leading-relaxed text-[color:var(--cream)]/80">
            {brand.description}
          </p>
          <div className="space-y-1 text-[9px] uppercase tracking-[0.45em] text-[color:var(--slate)]">
            {contactChannels.filter(channel => channel.label !== "Address").map((channel) => (
              <div key={channel.value}>{channel.value}</div>
            ))}
          </div>
        </div>

        {footerNav.map((section) => (
          <div key={section.label} className="space-y-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--slate)]/80">
              {section.label}
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--cream)]/80">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[color:var(--navy-300)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--slate)]/80">
            Store Address
          </div>
          <div className="text-sm leading-relaxed text-[color:var(--cream)]/80">
            <div>123 Fashion Street</div>
            <div>New York, NY 10001</div>
            <div className="mt-1">GST: 12ABCDE1234F1Z5</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[var(--navy-900)] py-5 text-center text-[10px] uppercase tracking-[0.4em] text-[color:var(--slate)]">
        © {new Date().getFullYear()} {brand.name}. Crafted for family wardrobes.
        <div className="mt-2 normal-case">Made by KingpiN Vision Forge</div>
      </div>
    </footer>
  );
}
