import Link from '../ui/Link.jsx';
import BrandMark from '../ui/BrandMark.jsx';
import { shell } from '../ui/classes.js';
import { FaYoutube, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const footerGroups = [
  { title: 'Quick Links', links: ['Home', 'Tutorials', 'Notes', 'Roadmaps'] },
  { title: 'Resources', links: ['Java Tutorials', 'SQL Databases', 'DSA Guides', 'Web Development', 'DevOps Systems'] },
  { title: 'Contact', links: ['About Us', 'Contact Us'] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#080808] py-16">
      <div className={shell}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 text-lg font-bold text-white">
              <BrandMark compact />
            </Link>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              Learn Today. Lead Tomorrow.
              Your journey to tech excellence starts here.
            </p>
    <div className="flex gap-3">
  {[
    { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCdsgdHQ1wFtKoQ_XWThLKwQ" },
    { icon: <FaGithub /> },
    { icon: <FaInstagram />, url: "https://www.instagram.com/ten.official985/" },
    { icon: <FaLinkedinIn /> }
  ].map((item, index) => (
    <a
      key={index}
      href={item.url || "#"}
      target={item.url ? "_blank" : undefined}
      rel={item.url ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-neutral-300 transition hover:-translate-y-0.5 hover:bg-gray-300 hover:text-black"
    >
      {item.icon}
    </a>
  ))}
</div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-5 border-l-2 border-cyan-300 pl-3 text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-neutral-400 transition hover:pl-1 hover:text-cyan-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/[0.04] pt-8 text-center text-sm text-neutral-600">
          &copy; 2026 The Epoch Nova. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
