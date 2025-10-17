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
<footer className="border-t border-[color:var(--brand-line)] bg-gradient-to-b from-[#f9d6d6] to-[#f0ebe3] text-sm text-[#4a4a4a]">
      <div className="mx-auto grid w-full gap-8 px-6 py-12 md:flex md:px-0 md:py-20 md:justify-center">
        <div className="space-y-5">
          <div className="serif text-2xl font-semibold tracking-[0.25em] text-[#1b1b1b]">
            {brand.name}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#4a4a4a]">
            {brand.description}
          </p>
          <div className="space-y-1 text-[9px] uppercase tracking-[0.35em] text-[#2d3748]">
            {contactChannels.filter(channel => channel.label !== "Address").map((channel) => (
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

        <div className="space-y-4">
          <div className="text-[11px] uppercase tracking-[0.45em] text-[#7c7c7c]">
            Store Address
          </div>
          <div className="text-sm text-[#4f4f4f] leading-relaxed">
            <div>123 Fashion Street</div>
            <div>New York, NY 10001</div>
            <div className="mt-1">GST: 12ABCDE1234F1Z5</div>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--brand-line)] py-5 text-center text-[10px] uppercase tracking-[0.4em] text-[#7b7b7b]">
        © {new Date().getFullYear()} {brand.name}. Crafted for family wardrobes.
        <div className="mt-2 normal-case">Made by KingpiN Vision Forge</div>
      </div>
    </footer>
  );
}
